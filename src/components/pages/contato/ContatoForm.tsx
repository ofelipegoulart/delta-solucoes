"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  ARTE_OPTIONS,
  ASSUNTO_OPTIONS,
  MATERIAL_OPTIONS,
  MAX_FILE_SIZE_BYTES,
  MAX_FILE_SIZE_MB,
  MODE_COPY,
  MODE_LABELS,
  MODE_ORDER,
  STORAGE_KEY,
  isMode,
  type Mode,
} from "./contato-content";

type FormValues = {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  assunto: string;
  tipoMaterial: string;
  quantidade: string;
  prazo: string;
  temArte: string;
  cnpj: string;
  cidadeUf: string;
  mensagem: string;
  aceite: boolean;
};

const EMPTY_VALUES: FormValues = {
  nome: "",
  email: "",
  telefone: "",
  empresa: "",
  assunto: "",
  tipoMaterial: "",
  quantidade: "",
  prazo: "",
  temArte: "",
  cnpj: "",
  cidadeUf: "",
  mensagem: "",
  aceite: false,
};

type Errors = Partial<Record<keyof FormValues | "arquivos", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function formatCnpj(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 14);
  let out = digits;
  if (digits.length > 2) out = `${digits.slice(0, 2)}.${digits.slice(2)}`;
  if (digits.length > 5) out = `${out.slice(0, 6)}.${digits.slice(5)}`;
  if (digits.length > 8) out = `${out.slice(0, 10)}/${digits.slice(8)}`;
  if (digits.length > 12) out = `${out.slice(0, 15)}-${digits.slice(12)}`;
  return out;
}

const fieldClass =
  "h-[42px] px-[13px] w-full border border-borda-morna-fraca bg-branco text-[15px] rounded-[2px] text-grafite focus:outline-2 focus:outline-laranja focus:outline-offset-1";

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[12px] font-bold uppercase text-marinho mb-1.5"
      style={{ letterSpacing: "0.1em" }}
    >
      {children}
    </label>
  );
}

export default function ContatoForm({ initialModo }: { initialModo?: string }) {
  const startingMode: Mode = isMode(initialModo) ? initialModo : "contato";
  const [mode, setMode] = useState<Mode>(startingMode);
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const tabRefs = useRef<Record<Mode, HTMLButtonElement | null>>({
    contato: null,
    orcamento: null,
    revendedor: null,
  });
  const panelId = useId();

  useEffect(() => {
    try {
      if (isMode(initialModo)) {
        window.localStorage.setItem(STORAGE_KEY, initialModo);
        return;
      }
      const stored = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- sincroniza com localStorage, indisponível no SSR
      if (isMode(stored)) setMode(stored);
    } catch {
      // localStorage indisponível (modo privado, etc.) — mantém o padrão
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function changeMode(next: Mode) {
    setMode(next);
    setErrors({});
    setSubmitted(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignora
    }
  }

  function handleTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    const index = MODE_ORDER.indexOf(mode);
    let nextIndex: number | null = null;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % MODE_ORDER.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + MODE_ORDER.length) % MODE_ORDER.length;
    if (nextIndex !== null) {
      event.preventDefault();
      const next = MODE_ORDER[nextIndex];
      changeMode(next);
      tabRefs.current[next]?.focus();
    }
  }

  function setValue<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function addFiles(list: FileList | File[]) {
    const incoming = Array.from(list);
    const tooBig = incoming.find((f) => f.size > MAX_FILE_SIZE_BYTES);
    if (tooBig) {
      setErrors((e) => ({
        ...e,
        arquivos: `"${tooBig.name}" tem mais de ${MAX_FILE_SIZE_MB} MB. Envie arquivos menores.`,
      }));
      return;
    }
    setErrors((e) => ({ ...e, arquivos: undefined }));
    setFiles((prev) => [...prev, ...incoming]);
  }

  function validate(): Errors {
    const next: Errors = {};
    const copy = MODE_COPY[mode];

    if (!values.nome.trim()) next.nome = "Informe seu nome.";
    if (!values.email.trim()) next.email = "Informe seu e-mail.";
    else if (!EMAIL_RE.test(values.email.trim())) next.email = "E-mail em formato inválido.";

    if (copy.phoneRequired && !values.telefone.trim()) next.telefone = "Informe um telefone.";

    if (mode === "orcamento" || mode === "revendedor") {
      if (!values.empresa.trim()) next.empresa = "Informe a empresa.";
    }

    if (mode === "revendedor") {
      const digits = values.cnpj.replace(/\D/g, "");
      if (!digits) next.cnpj = "Informe o CNPJ.";
      else if (digits.length !== 14) next.cnpj = "CNPJ em formato inválido.";
      if (!values.cidadeUf.trim()) next.cidadeUf = "Informe cidade / UF.";
    }

    if (!values.mensagem.trim()) next.mensagem = "Escreva uma mensagem.";
    if (!values.aceite) next.aceite = "É preciso aceitar os termos para continuar.";

    return next;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (honeypotRef.current?.value) {
      setSubmitted(true);
      return;
    }
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.set("website", honeypotRef.current?.value ?? "");
      formData.set("modo", mode);
      formData.set("nome", values.nome);
      formData.set("email", values.email);
      formData.set("telefone", values.telefone);
      formData.set("mensagem", values.mensagem);
      if (mode === "orcamento" || mode === "revendedor") formData.set("empresa", values.empresa);
      if (mode === "contato") formData.set("assunto", values.assunto);
      if (mode === "orcamento") {
        formData.set("tipoMaterial", values.tipoMaterial);
        formData.set("quantidade", values.quantidade);
        formData.set("prazo", values.prazo);
        formData.set("temArte", values.temArte);
        files.forEach((file) => formData.append("arquivos", file));
      }
      if (mode === "revendedor") {
        formData.set("cnpj", values.cnpj);
        formData.set("cidadeUf", values.cidadeUf);
      }

      const response = await fetch("/api/contato", { method: "POST", body: formData });
      if (!response.ok) throw new Error("Falha no envio");

      setSubmitted(true);
      setFiles([]);
      setValues(EMPTY_VALUES);
    } catch {
      setErrors({ mensagem: "Não foi possível enviar agora. Tente novamente em instantes." });
    } finally {
      setSubmitting(false);
    }
  }

  const copy = MODE_COPY[mode];

  return (
    <div>
      <h2
        className="font-bold text-marinho"
        style={{ fontSize: "clamp(25px, 3.6vw, 34px)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
      >
        Manda sua mensagem
      </h2>
      <p className="text-grafite leading-[1.62] mt-3" style={{ fontSize: "clamp(15.5px, 1.7vw, 17px)" }}>
        {copy.supportLine}
      </p>

      <div
        role="tablist"
        aria-label="Tipo de mensagem"
        className="grid grid-cols-3 gap-1 bg-off-white-morno rounded-full p-[5px] mt-6"
      >
        {MODE_ORDER.map((m) => {
          const active = m === mode;
          return (
            <button
              key={m}
              ref={(el) => {
                tabRefs.current[m] = el;
              }}
              type="button"
              role="tab"
              id={`contato-tab-${m}`}
              aria-selected={active}
              aria-controls={panelId}
              tabIndex={active ? 0 : -1}
              onClick={() => changeMode(m)}
              onKeyDown={handleTabKeyDown}
              className={`rounded-full py-[11px] px-1.5 cursor-pointer transition-colors duration-150 ${
                active ? "bg-branco text-laranja-profundo font-bold" : "bg-transparent text-[#6f4c3e] font-medium"
              }`}
              style={{ fontFamily: "var(--font-heading)", fontSize: 15 }}
            >
              {MODE_LABELS[m]}
            </button>
          );
        })}
      </div>

      <form
        id={panelId}
        role="tabpanel"
        aria-labelledby={`contato-tab-${mode}`}
        onSubmit={handleSubmit}
        noValidate
        className="contato-card bg-off-white-morno mt-4 flex flex-col gap-4"
        style={{ padding: "clamp(20px, 3vw, 32px)" }}
      >
        {/* honeypot — mantido fora da visão e do fluxo de teclado */}
        <div style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }} aria-hidden="true">
          <label htmlFor="contato-website">Não preencher</label>
          <input
            ref={honeypotRef}
            id="contato-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="contato-campos-grid">
          <div>
            <Label htmlFor="contato-nome">Nome</Label>
            <input
              id="contato-nome"
              className={fieldClass}
              value={values.nome}
              onChange={(e) => setValue("nome", e.target.value)}
              required
              aria-invalid={!!errors.nome}
              aria-describedby={errors.nome ? "contato-nome-erro" : undefined}
            />
            {errors.nome && <p id="contato-nome-erro" className="text-laranja-profundo text-[13px] mt-1">{errors.nome}</p>}
          </div>

          <div>
            <Label htmlFor="contato-email">E-mail</Label>
            <input
              id="contato-email"
              type="email"
              className={fieldClass}
              value={values.email}
              onChange={(e) => setValue("email", e.target.value)}
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "contato-email-erro" : undefined}
            />
            {errors.email && <p id="contato-email-erro" className="text-laranja-profundo text-[13px] mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="contato-telefone">{copy.phoneLabel}</Label>
            <input
              id="contato-telefone"
              type="tel"
              className={fieldClass}
              value={values.telefone}
              onChange={(e) => setValue("telefone", e.target.value)}
              required={copy.phoneRequired}
              aria-invalid={!!errors.telefone}
              aria-describedby={errors.telefone ? "contato-telefone-erro" : undefined}
            />
            {errors.telefone && <p id="contato-telefone-erro" className="text-laranja-profundo text-[13px] mt-1">{errors.telefone}</p>}
          </div>

          {(mode === "orcamento" || mode === "revendedor") && (
            <div>
              <Label htmlFor="contato-empresa">Empresa</Label>
              <input
                id="contato-empresa"
                className={fieldClass}
                value={values.empresa}
                onChange={(e) => setValue("empresa", e.target.value)}
                required
                aria-invalid={!!errors.empresa}
                aria-describedby={errors.empresa ? "contato-empresa-erro" : undefined}
              />
              {errors.empresa && <p id="contato-empresa-erro" className="text-laranja-profundo text-[13px] mt-1">{errors.empresa}</p>}
            </div>
          )}

          {mode === "contato" && (
            <div>
              <Label htmlFor="contato-assunto">Assunto</Label>
              <select
                id="contato-assunto"
                className={fieldClass}
                value={values.assunto}
                onChange={(e) => setValue("assunto", e.target.value)}
              >
                <option value="">Selecione</option>
                {ASSUNTO_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
          )}

          {mode === "orcamento" && (
            <>
              <div>
                <Label htmlFor="contato-tipo-material">Tipo de material</Label>
                <select
                  id="contato-tipo-material"
                  className={fieldClass}
                  value={values.tipoMaterial}
                  onChange={(e) => setValue("tipoMaterial", e.target.value)}
                >
                  <option value="">Selecione</option>
                  {MATERIAL_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="contato-quantidade">Quantidade</Label>
                <input
                  id="contato-quantidade"
                  className={fieldClass}
                  value={values.quantidade}
                  onChange={(e) => setValue("quantidade", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="contato-prazo">Prazo desejado</Label>
                <input
                  id="contato-prazo"
                  className={fieldClass}
                  value={values.prazo}
                  onChange={(e) => setValue("prazo", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="contato-tem-arte">Já tem arte?</Label>
                <select
                  id="contato-tem-arte"
                  className={fieldClass}
                  value={values.temArte}
                  onChange={(e) => setValue("temArte", e.target.value)}
                >
                  <option value="">Selecione</option>
                  {ARTE_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          {mode === "revendedor" && (
            <>
              <div>
                <Label htmlFor="contato-cnpj">CNPJ</Label>
                <input
                  id="contato-cnpj"
                  className={fieldClass}
                  value={values.cnpj}
                  onChange={(e) => setValue("cnpj", formatCnpj(e.target.value))}
                  inputMode="numeric"
                  required
                  aria-invalid={!!errors.cnpj}
                  aria-describedby={errors.cnpj ? "contato-cnpj-erro" : undefined}
                />
                {errors.cnpj && <p id="contato-cnpj-erro" className="text-laranja-profundo text-[13px] mt-1">{errors.cnpj}</p>}
              </div>
              <div>
                <Label htmlFor="contato-cidade-uf">Cidade / UF</Label>
                <input
                  id="contato-cidade-uf"
                  className={fieldClass}
                  value={values.cidadeUf}
                  onChange={(e) => setValue("cidadeUf", e.target.value)}
                  required
                  aria-invalid={!!errors.cidadeUf}
                  aria-describedby={errors.cidadeUf ? "contato-cidade-uf-erro" : undefined}
                />
                {errors.cidadeUf && <p id="contato-cidade-uf-erro" className="text-laranja-profundo text-[13px] mt-1">{errors.cidadeUf}</p>}
              </div>
            </>
          )}
        </div>

        {mode === "orcamento" && (
          <div>
            <Label htmlFor="contato-arquivos">Upload de arquivos</Label>
            <label
              htmlFor="contato-arquivos"
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
              }}
              className={`block text-center cursor-pointer bg-branco text-grafite text-[14px] leading-relaxed p-4 border border-dashed transition-colors ${
                dragOver ? "border-laranja" : "border-borda-morna-fraca"
              }`}
            >
              Arraste a arte aqui ou clique para escolher — PDF, AI, CDR ou imagem, até {MAX_FILE_SIZE_MB} MB.
              <input
                ref={fileInputRef}
                id="contato-arquivos"
                name="arquivos"
                type="file"
                multiple
                className="sr-only"
                onChange={(e) => {
                  if (e.target.files?.length) addFiles(e.target.files);
                  e.target.value = "";
                }}
              />
            </label>
            {errors.arquivos && <p className="text-laranja-profundo text-[13px] mt-1">{errors.arquivos}</p>}
            {files.length > 0 && (
              <ul className="mt-2 flex flex-col gap-1">
                {files.map((file, index) => (
                  <li key={`${file.name}-${index}`} className="flex items-center justify-between text-[13px] text-grafite bg-branco px-3 py-1.5 border border-borda-morna-fraca">
                    <span className="truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => setFiles((prev) => prev.filter((_, i) => i !== index))}
                      className="text-laranja-profundo font-bold ml-3 shrink-0"
                      aria-label={`Remover ${file.name}`}
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div>
          <Label htmlFor="contato-mensagem">Mensagem</Label>
          <textarea
            id="contato-mensagem"
            rows={4}
            placeholder={copy.messagePlaceholder}
            className="w-full px-[13px] py-2.5 border border-borda-morna-fraca bg-branco text-[15px] rounded-[2px] text-grafite focus:outline-2 focus:outline-laranja focus:outline-offset-1 resize-y"
            value={values.mensagem}
            onChange={(e) => setValue("mensagem", e.target.value)}
            required
            aria-invalid={!!errors.mensagem}
            aria-describedby={errors.mensagem ? "contato-mensagem-erro" : undefined}
          />
          {errors.mensagem && <p id="contato-mensagem-erro" className="text-laranja-profundo text-[13px] mt-1">{errors.mensagem}</p>}
        </div>

        <div>
          <div className="flex items-start gap-2.5">
            <input
              id="contato-aceite"
              type="checkbox"
              className="mt-0.5 shrink-0"
              style={{ width: 20, height: 20, accentColor: "#f26522" }}
              checked={values.aceite}
              onChange={(e) => setValue("aceite", e.target.checked)}
              required
              aria-invalid={!!errors.aceite}
              aria-describedby={errors.aceite ? "contato-aceite-erro" : undefined}
            />
            <label htmlFor="contato-aceite" className="text-grafite text-[14px] leading-snug">
              Li e aceito os{" "}
              <a href="/termos-de-uso" className="text-laranja-profundo underline">termos de uso</a> e a{" "}
              <a href="/politica-de-privacidade" className="text-laranja-profundo underline">política de privacidade</a>.
            </label>
          </div>
          {errors.aceite && <p id="contato-aceite-erro" className="text-laranja-profundo text-[13px] mt-1">{errors.aceite}</p>}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="font-bold bg-laranja text-white rounded-[3px] hover:bg-laranja-profundo transition-colors disabled:opacity-60"
          style={{ fontFamily: "var(--font-heading)", fontSize: 15, padding: "14px 28px" }}
        >
          {submitting ? "Enviando…" : copy.submitLabel}
        </button>

        {submitted && (
          <p className="border-t border-borda-morna pt-4 font-semibold text-laranja-profundo" role="status">
            Mensagem enviada. A gente responde em até um dia útil.
          </p>
        )}
      </form>
    </div>
  );
}
