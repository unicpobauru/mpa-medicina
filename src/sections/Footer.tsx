import { PenLine, MapPin } from "lucide-react";
import { Container } from "../components/ui/Container";
import { navLinks } from "../data/nav";
import { FORM_HREF } from "../lib/cta";

export function Footer() {
  return (
    <footer className="bg-ink-900 pt-16 text-white/70 sm:pt-20">
      <Container>
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <img src="images/logo-mpa-white.png" alt="MPA — Medical Performance Academy" className="h-7 w-auto self-start" />
            <p className="max-w-[320px] text-[14px] leading-relaxed text-white/50">
              Pós-Graduação em Medicina Metabólica e Longevidade — uma realização da FAINTER,
              instituição pertencente ao Grupo UniCPO.
            </p>
            <img src="images/logo-fainter.png" alt="FAINTER" className="mt-2 h-5 w-auto self-start opacity-70" />
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="mb-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-white">
              Navegação
            </h4>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] text-white/55 transition-colors hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="mb-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-white">
              Contato
            </h4>
            <a
              href={FORM_HREF}
              className="flex items-center gap-2 text-[14px] text-white/55 transition-colors hover:text-gold-400"
            >
              <PenLine className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              Fazer minha inscrição
            </a>
            <span className="flex items-start gap-2 text-[14px] text-white/55">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
              São Paulo, Brasil
            </span>
            <a href="#" className="mt-1 text-[13px] text-white/40 underline-offset-4 hover:underline">
              Política de Privacidade
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-8 text-center text-[12px] text-white/35 sm:flex-row sm:text-left">
          <p>MPA · Medical Performance Academy — uma realização do Grupo UniCPO. Copyright {new Date().getFullYear()} — Todos os direitos reservados.</p>
          <p>CNPJ: [CNPJ_MPA]</p>
        </div>
      </Container>
    </footer>
  );
}
