import { WHATSAPP_URL } from "../lib/whatsapp";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { trustPoints } from "../data/trustPoints";

export function Hero() {
  return (
    <section id="inicio" className="relative">
      <div className="relative flex min-h-[640px] items-center overflow-hidden bg-ink sm:min-h-[720px] lg:min-h-[860px]">
        <div className="absolute inset-0">
          <img
            src="images/hero-mpa.jpg"
            alt="Médico de vanguarda — MPA Medical Performance Academy"
            className="h-full min-h-[640px] w-full object-cover sm:min-h-[720px] lg:min-h-[860px]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,11,22,0.55) 0%, rgba(5,11,22,0.45) 45%, rgba(5,11,22,0.9) 100%)",
            }}
          />
        </div>

        <Container className="relative z-10 pb-32 pt-32 sm:pt-40 lg:pb-48 lg:pt-44">
          <div className="mx-auto flex max-w-[760px] flex-col items-center gap-6 text-center">
            <span className="eyebrow text-white/80">
              <span className="h-px w-6 bg-gold-400" aria-hidden />
              Exclusivo para médicos
            </span>
            <h1
              className="text-balance font-extrabold leading-[1.08] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(2.25rem, 1.6rem + 3vw, 3.75rem)" }}
            >
              Posicione-se como o médico de referência que seus pacientes já estão procurando.
            </h1>
            <p className="max-w-[560px] text-[16px] leading-relaxed text-white/75 sm:text-lg">
              Pós-Graduação em Medicina Metabólica e Longevidade
              <br />
              400 horas de formação multidimensional.
            </p>

            <div className="mt-1 flex flex-col items-center gap-2 rounded-2xl border border-gold-400/30 bg-white/[0.06] px-6 py-4 backdrop-blur-sm sm:px-8">
              <div className="flex items-center gap-5 sm:gap-8">
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-2xl font-extrabold leading-none text-white sm:text-3xl">75%</span>
                  <span className="text-[11px] uppercase tracking-[0.12em] text-gold-200">Online</span>
                </div>
                <span className="text-lg font-light text-white/30" aria-hidden>|</span>
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-2xl font-extrabold leading-none text-white sm:text-3xl">25%</span>
                  <span className="text-[11px] uppercase tracking-[0.12em] text-gold-200">Presencial</span>
                </div>
              </div>
              <span className="text-[12.5px] leading-snug text-white/65">
                Encontros presenciais em São Paulo
              </span>
            </div>

            <Button href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="primary" size="lg" className="mt-2">
              Falar com um consultor
            </Button>
            <span className="text-[12px] text-white/50">
              Resposta por WhatsApp em até 24h · Vagas limitadas por turma
            </span>
          </div>
        </Container>
      </div>

      <div className="relative z-20 px-6 sm:px-8 lg:px-10">
        <Container className="!px-0">
          <div className="-mt-20 grid gap-0 overflow-hidden rounded-3xl bg-ink shadow-panel sm:-mt-24 lg:-mt-28 lg:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-14">
              <span className="eyebrow text-white/70">
                <span className="h-px w-6 bg-gold-400" aria-hidden />
                MPA · Medical Performance Academy
              </span>
              <h2 className="text-balance text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                O que você vai ganhar nessa formação.
              </h2>
              <ul className="flex flex-col gap-3.5">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[14.5px] leading-snug text-white/80">
                    <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-400" strokeWidth={2} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 border-t border-white/10 bg-white/[0.03] p-8 text-center sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              <span className="eyebrow text-white/70">
                <span className="h-px w-6 bg-gold-400" aria-hidden />
                Contato direto
              </span>
              <div className="flex flex-col items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-ink">
                  <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Fale com um consultor acadêmico
                </h3>
              </div>
              <p className="max-w-xs text-[14px] leading-relaxed text-white/70">
                Sem formulários: escreva pelo WhatsApp e tire suas dúvidas sobre datas,
                investimento e formas de pagamento.
              </p>
              <Button href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="ghost" size="lg" className="w-full">
                Falar pelo WhatsApp
              </Button>
              <span className="text-[11px] text-white/40">
                Resposta em até 24h · Vagas limitadas por turma
              </span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
