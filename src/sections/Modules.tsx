import { WHATSAPP_URL } from "../lib/whatsapp";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { modules } from "../data/modules";

export function Modules() {
  return (
    <section id="modulos" className="bg-soft py-20 sm:py-24 lg:py-32">
      <Container size="lg">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-4">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold-500" aria-hidden />
                MPA · Matriz curricular
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-balance font-extrabold leading-[1.12] tracking-[-0.01em] text-ink"
                style={{ fontSize: "clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem)" }}
              >
                O que inclui a pós-graduação
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-[480px] text-[15px] leading-relaxed text-ink/60">
                Uma formação multidimensional para uma atuação médica mais completa — 400 horas
                em 10 áreas, com professor responsável por cada uma.
              </p>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <Button href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="secondary" size="md">
              Falar com um consultor
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-white shadow-card">
          {modules.map((module, i) => (
            <Reveal key={module.number} delay={i * 70}>
              <div className="group grid grid-cols-[40px_1fr] items-start gap-4 border-b border-line px-6 py-6 transition-colors duration-300 last:border-b-0 hover:bg-ink sm:grid-cols-[56px_1fr_88px] sm:items-center sm:gap-6 sm:px-8">
                <span className="font-mono text-[13px] font-bold text-gold-600 transition-colors duration-300 group-hover:text-gold-400">
                  {module.number}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[16px] font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-white sm:text-[17px]">
                    {module.title}
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-ink/60 transition-colors duration-300 group-hover:text-gold-200 sm:max-w-[520px]">
                    {module.description}
                  </p>
                  <span className="mt-3 inline-block w-fit rounded-full bg-gold-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-ink sm:hidden">
                    {module.hours}h
                  </span>
                </div>
                <span className="hidden w-fit rounded-full bg-gold-200 px-3 py-1 text-center text-[11px] font-semibold uppercase tracking-[0.06em] text-ink sm:block sm:justify-self-end">
                  {module.hours}h
                </span>
              </div>
            </Reveal>
          ))}
          <div className="flex items-center justify-between bg-ink px-6 py-6 sm:px-8">
            <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-gold-200">
              Carga horária total da formação
            </span>
            <span className="text-2xl font-extrabold text-white">400h</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
