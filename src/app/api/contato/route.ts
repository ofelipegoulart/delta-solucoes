import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const DESTINATION_EMAIL = "matheus@groupmaxi.com.br";

// Rascunho: exige RESEND_API_KEY e um domínio verificado no Resend para
// substituir FROM_EMAIL abaixo antes de ativar o envio em produção.
const FROM_EMAIL = "Delta Soluções <onboarding@resend.dev>";

const FIELD_LABELS: Record<string, string> = {
  modo: "Modo",
  nome: "Nome",
  email: "E-mail",
  telefone: "Telefone",
  empresa: "Empresa",
  assunto: "Assunto",
  tipoMaterial: "Tipo de material",
  quantidade: "Quantidade",
  prazo: "Prazo desejado",
  temArte: "Já tem arte?",
  cnpj: "CNPJ",
  cidadeUf: "Cidade / UF",
  mensagem: "Mensagem",
};

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  // Honeypot: bots preenchem o campo escondido, humanos não.
  if (formData.get("website")) {
    return NextResponse.json({ ok: true });
  }

  const nome = String(formData.get("nome") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const mensagem = String(formData.get("mensagem") ?? "").trim();

  if (!nome || !email || !mensagem) {
    return NextResponse.json(
      { ok: false, error: "Campos obrigatórios ausentes." },
      { status: 400 }
    );
  }

  const arquivos = formData.getAll("arquivos").filter((f): f is File => f instanceof File);

  const resumo = Object.entries(FIELD_LABELS)
    .map(([key, label]) => {
      const value = formData.get(key);
      if (!value) return null;
      return `<p><strong>${label}:</strong> ${String(value)}</p>`;
    })
    .filter(Boolean)
    .join("\n");

  if (!process.env.RESEND_API_KEY) {
    console.log("[contato] RESEND_API_KEY ausente — envio simulado", {
      nome,
      email,
      destino: DESTINATION_EMAIL,
      arquivos: arquivos.map((f) => f.name),
    });
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const attachments = await Promise.all(
      arquivos.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: `Novo contato pelo site — ${nome}`,
      html: resumo,
      attachments: attachments.length ? attachments : undefined,
    });

    if (error) {
      console.error("[contato] Falha ao enviar via Resend", error);
      return NextResponse.json({ ok: false, error: "Falha no envio." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contato] Erro inesperado ao enviar e-mail", error);
    return NextResponse.json({ ok: false, error: "Falha no envio." }, { status: 500 });
  }
}
