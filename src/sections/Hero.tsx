import { FORM_HREF } from "../lib/cta";
import { CheckCircle2 } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { LeadForm } from "../components/ui/LeadForm";
import { trustPoints } from "../data/trustPoints";

/** Sparkline verde que se "desenha" subindo ao carregar. */
function TrendSpark() {
  return (
    <svg viewBox="0 0 64 32" className="h-8 w-16 shrink-0" fill="none" aria-hidden>
      <polyline
        points="2,28 14,21 26,24 38,13 50,16 62,4"
        stroke="#34d399"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={100}
        strokeDasharray="100"
        strokeDashoffset="100"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="100"
          to="0"
          dur="1.4s"
          begin="0.3s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.16 1 0.3 1"
        />
      </polyline>
      <circle cx="62" cy="4" r="3" fill="#34d399" opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.6s" fill="freeze" />
      </circle>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative">
      <div className="relative flex min-h-[640px] items-center overflow-hidden bg-ink sm:min-h-[720px] lg:min-h-[860px]">
        <div className="absolute inset-0">
          <img
            src="images/hero-mpa.jpg"
            alt="Médico de vanguarda — MPA Medical Performance Academy"
            className="h-full min-h-[640px] w-full object-cover object-[78%_8%] sm:min-h-[720px] sm:object-[74%_15%] lg:min-h-[860px] lg:object-center"
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
          <div className="mx-auto flex max-w-[760px] flex-col items-center gap-6 text-center [text-shadow:0_1px_12px_rgba(5,11,22,0.5)]">
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

            <div className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] py-1.5 pl-1.5 pr-4 backdrop-blur-sm [text-shadow:none]">
              <img
                src="images/selo-mec.png"
                alt="Selo MEC — Faculdade Nota Máxima"
                className="h-9 w-9 shrink-0 object-contain"
              />
              <span className="text-[12.5px] font-semibold text-white/85">
                Estude em uma faculdade nota máxima no MEC
              </span>
            </div>

            <div className="mt-1 flex items-center gap-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.08] px-5 py-3.5 backdrop-blur-sm [text-shadow:none]">
              <TrendSpark />
              <p className="text-left text-[15px] font-semibold leading-snug text-white sm:text-base">
                Aumente seu <span className="text-emerald-300">faturamento</span> e sua{" "}
                <span className="text-emerald-300">autoridade médica</span>.
              </p>
            </div>

            <Button href={FORM_HREF} variant="primary" size="lg" className="mt-2">
              Garanta sua vaga
            </Button>
            <span className="text-[12px] text-white/50">Vagas limitadas por turma</span>
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

              <div className="mt-1 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <img
                  src="images/selo-mec.png"
                  alt="Selo MEC — Faculdade Nota Máxima no MEC"
                  className="h-14 w-14 shrink-0 object-contain"
                />
                <div className="flex flex-col gap-0.5 text-left">
                  <span className="text-[13.5px] font-bold text-white">
                    Estude em uma faculdade nota máxima no MEC
                  </span>
                  <span className="text-[12px] leading-snug text-white/55">
                    Portaria nº 1540 · Ministério da Educação
                  </span>
                </div>
              </div>
            </div>

            <div
              id="formulario"
              className="flex scroll-mt-24 flex-col items-center gap-4 border-t border-white/10 bg-white/[0.03] p-8 text-center sm:p-10 lg:border-l lg:border-t-0 lg:p-12"
            >
              <span className="eyebrow text-white/70">
                <span className="h-px w-6 bg-gold-400" aria-hidden />
                Inscrições abertas
              </span>
              <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Garanta sua vaga na turma
              </h3>
              <p className="max-w-xs text-[13.5px] leading-relaxed text-white/70">
                Preencha seus dados — nossa equipe acadêmica retorna com datas, investimento e
                próximos passos.
              </p>
              <LeadForm />
              <span className="text-[11px] text-white/40">Vagas limitadas por turma</span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
