import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Configuração via variáveis de ambiente (.env.local / painel da hospedagem):
//   RESEND_API_KEY       chave da API do Resend
//   CONTACT_FROM_EMAIL   remetente em domínio verificado no Resend,
//                        ex.: "Site Delta <contato@seudominio.com.br>"
//   CONTACT_TO_EMAIL     caixa do Outlook que recebe os contatos
//                        (aceita vários, separados por vírgula)
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Delta Soluções <onboarding@resend.dev>";
const TO_EMAILS = (process.env.CONTACT_TO_EMAIL ?? "matheus@groupmaxi.com.br")
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);

// Limite total de anexos do Resend é 40 MB.
const MAX_ATTACHMENTS_BYTES = 35 * 1024 * 1024;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const COLORS = {
  laranja: "#f26522",
  laranjaProfundo: "#a8400d",
  marinho: "#172a3a",
  grafite: "#293238",
  fundo: "#f7f5f0",
  rotulo: "#fdeee5",
  borda: "#f5cdb3",
};

const MODE_TITLES: Record<string, string> = {
  contato: "Contato",
  orcamento: "Pedido de orçamento",
  revendedor: "Cadastro de revendedor",
};

type Field = { key: string; label: string };

const COMMON_FIELDS: Field[] = [
  { key: "nome", label: "Nome" },
  { key: "email", label: "E-mail" },
  { key: "telefone", label: "Telefone" },
];

const FIELDS_BY_MODE: Record<string, Field[]> = {
  contato: [...COMMON_FIELDS, { key: "assunto", label: "Assunto" }],
  orcamento: [
    ...COMMON_FIELDS,
    { key: "empresa", label: "Empresa" },
    { key: "tipoMaterial", label: "Tipo de material" },
    { key: "quantidade", label: "Quantidade" },
    { key: "prazo", label: "Prazo desejado" },
    { key: "temArte", label: "Já tem arte?" },
  ],
  revendedor: [
    ...COMMON_FIELDS,
    { key: "empresa", label: "Empresa" },
    { key: "cnpj", label: "CNPJ" },
    { key: "cidadeUf", label: "Cidade / UF" },
  ],
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

type Row = { label: string; value: string };

// Layout em tabelas com estilos inline: o Outlook desktop renderiza HTML com
// o motor do Word e ignora flex/grid/CSS externo.
function buildHtml(title: string, rows: Row[], mensagem: string, anexos: string[]) {
  const rowsHtml = rows
    .map(
      (row) => `
        <tr>
          <td width="150" valign="top" bgcolor="${COLORS.rotulo}" style="width:150px;padding:12px 14px;border-bottom:1px solid ${COLORS.borda};font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:${COLORS.laranjaProfundo};">
            ${escapeHtml(row.label)}
          </td>
          <td valign="top" bgcolor="#ffffff" style="padding:12px 16px;border-bottom:1px solid ${COLORS.borda};font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;color:${COLORS.grafite};">
            ${escapeHtml(row.value)}
          </td>
        </tr>`
    )
    .join("");

  const anexosHtml = anexos.length
    ? `
        <tr>
          <td width="150" valign="top" bgcolor="${COLORS.rotulo}" style="width:150px;padding:12px 14px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:${COLORS.laranjaProfundo};">
            Anexos
          </td>
          <td valign="top" bgcolor="#ffffff" style="padding:12px 16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:22px;color:${COLORS.grafite};">
            ${anexos.map((n) => `&#128206; ${escapeHtml(n)}`).join("<br>")}
          </td>
        </tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background-color:${COLORS.fundo};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${COLORS.fundo}" style="background-color:${COLORS.fundo};">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">
          <tr>
            <td bgcolor="${COLORS.marinho}" style="background-color:${COLORS.marinho};padding:22px 24px;border-bottom:4px solid ${COLORS.laranja};">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;color:${COLORS.laranja};">Delta Soluções em Impressão</div>
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:bold;line-height:28px;color:#ffffff;padding-top:6px;">${escapeHtml(title)}</div>
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#c9d3da;padding-top:2px;">Enviado pelo formulário do site</div>
            </td>
          </tr>
          <tr>
            <td bgcolor="#ffffff" style="background-color:#ffffff;padding:20px 24px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${COLORS.borda};border-collapse:collapse;">
                ${rowsHtml}
              </table>
            </td>
          </tr>
          <tr>
            <td bgcolor="#ffffff" style="background-color:#ffffff;padding:16px 24px 8px;">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:${COLORS.laranjaProfundo};padding-bottom:8px;">Mensagem</div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="${COLORS.fundo}" style="background-color:${COLORS.fundo};border-left:4px solid ${COLORS.laranja};padding:14px 16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:24px;color:${COLORS.grafite};white-space:pre-wrap;">${escapeHtml(mensagem)}</td>
                </tr>
              </table>
            </td>
          </tr>
          ${
            anexosHtml
              ? `<tr>
            <td bgcolor="#ffffff" style="background-color:#ffffff;padding:16px 24px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${COLORS.borda};border-collapse:collapse;">
                ${anexosHtml}
              </table>
            </td>
          </tr>`
              : ""
          }
          <tr>
            <td bgcolor="#ffffff" style="background-color:#ffffff;padding:16px 24px 24px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;color:#6b7780;">
              Para responder, use o botão <strong>Responder</strong> do seu e-mail: a resposta vai direto para o contato acima.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildText(title: string, rows: Row[], mensagem: string, anexos: string[]) {
  const lines = [title, "", ...rows.map((r) => `${r.label}: ${r.value}`), "", "Mensagem:", mensagem];
  if (anexos.length) lines.push("", `Anexos: ${anexos.join(", ")}`);
  return lines.join("\n");
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  // Honeypot: bots preenchem o campo escondido, humanos não.
  if (formData.get("website")) {
    return NextResponse.json({ ok: true });
  }

  const get = (key: string) => String(formData.get(key) ?? "").trim();

  const nome = get("nome");
  const email = get("email");
  const mensagem = get("mensagem");

  if (!nome || !email || !mensagem || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Campos obrigatórios ausentes ou inválidos." },
      { status: 400 }
    );
  }

  const modo = get("modo") in FIELDS_BY_MODE ? get("modo") : "contato";
  const title = MODE_TITLES[modo];

  const rows: Row[] = FIELDS_BY_MODE[modo]
    .map((field) => ({ label: field.label, value: get(field.key) }))
    .filter((row) => row.value);

  // Só orçamento aceita arquivos.
  const arquivos =
    modo === "orcamento"
      ? formData.getAll("arquivos").filter((f): f is File => f instanceof File && f.size > 0)
      : [];

  if (arquivos.reduce((total, f) => total + f.size, 0) > MAX_ATTACHMENTS_BYTES) {
    return NextResponse.json(
      { ok: false, error: "Os anexos somam mais que o limite permitido." },
      { status: 413 }
    );
  }

  const anexos = arquivos.map((f) => f.name);

  if (!process.env.RESEND_API_KEY) {
    console.log("[contato] RESEND_API_KEY ausente — envio simulado", {
      modo,
      nome,
      email,
      destino: TO_EMAILS,
      arquivos: anexos,
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
      to: TO_EMAILS,
      replyTo: email,
      subject: singleLine(`[Site] ${title} — ${nome}`),
      html: buildHtml(title, rows, mensagem, anexos),
      text: buildText(title, rows, mensagem, anexos),
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
