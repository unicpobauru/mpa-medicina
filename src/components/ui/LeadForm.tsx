import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { logToGoogleSheet, type LeadFormData } from "../../lib/leadForm";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-[14px] text-white placeholder:text-white/35 outline-none transition-colors duration-200 focus:border-gold-400/60 focus:bg-white/[0.09]";
const labelClass = "text-left text-[12.5px] font-semibold text-white/70";

export function LeadForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [medico, setMedico] = useState<"Sim" | "Não" | "">("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!nome.trim() || !telefone.trim() || !email.trim() || !medico) {
      setError("Preencha todos os campos para continuar.");
      return;
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Digite um e-mail válido.");
      return;
    }

    setSubmitting(true);
    const data: LeadFormData = {
      nome: nome.trim(),
      telefone: telefone.trim(),
      email: email.trim(),
      medico,
    };
    logToGoogleSheet(data);

    // Sem retorno legível do Apps Script (no-cors) — mostramos o sucesso
    // logo após enviar; o lead já foi disparado para a planilha.
    window.setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 600);
  }

  if (done) {
    return (
      <div className="flex w-full flex-col items-center gap-3 rounded-2xl border border-gold-400/30 bg-white/[0.05] px-6 py-8 text-center">
        <CheckCircle2 className="h-9 w-9 text-gold-400" strokeWidth={2} />
        <p className="text-[15px] font-bold text-white">Inscrição recebida!</p>
        <p className="max-w-xs text-[13px] leading-relaxed text-white/65">
          Nossa equipe acadêmica entra em contato em breve para os próximos passos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3.5 text-left" noValidate>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="lead-nome">
          Nome completo
        </label>
        <input
          id="lead-nome"
          type="text"
          autoComplete="name"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className={inputClass}
          placeholder="Seu nome e sobrenome"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="lead-telefone">
          Telefone / WhatsApp
        </label>
        <input
          id="lead-telefone"
          type="tel"
          autoComplete="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className={inputClass}
          placeholder="(11) 91234-5678"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="lead-email">
          E-mail
        </label>
        <input
          id="lead-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="voce@email.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <span className={labelClass}>Você é médico(a)?</span>
        <div className="grid grid-cols-2 gap-2">
          {(["Sim", "Não"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setMedico(option)}
              className={`rounded-xl border px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.04em] transition-colors duration-200 ${
                medico === option
                  ? "border-gold-400 bg-gold-500 text-white"
                  : "border-white/15 bg-white/[0.06] text-white/70 hover:border-white/30"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="text-[12.5px] font-medium text-red-300">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-1 flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-600 disabled:pointer-events-none disabled:opacity-60"
      >
        {submitting && <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.5} />}
        Fazer minha inscrição
      </button>
    </form>
  );
}
