import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { renderBold } from "../lib/renderBold";
import { aboutParagraphs, historyTimeline } from "../data/about";

export function About() {
  return (
    <section id="institucion" className="bg-paper py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold-500" aria-hidden />
                Grupo UniCPO · Nossa história
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-balance font-extrabold leading-[1.12] tracking-[-0.01em] text-ink"
                style={{ fontSize: "clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem)" }}
              >
                O Grupo UniCPO
              </h2>
            </Reveal>
            <div className="flex flex-col gap-4">
              {aboutParagraphs.map((paragraph, i) => (
                <Reveal key={paragraph} delay={140 + i * 60}>
                  <p className="max-w-[520px] text-[15px] leading-relaxed text-ink/65 sm:text-base">
                    {renderBold(paragraph)}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={100}>
            <img
              src="images/predio-fainter-02.jpg"
              alt="Sede da FAINTER — Grupo UniCPO, São Paulo, Brasil"
              className="aspect-[4/5] w-full rounded-3xl object-cover sm:aspect-video lg:aspect-[4/5]"
            />
          </Reveal>
        </div>

        <div className="mt-16 border-t border-line pt-12 sm:mt-20 sm:pt-14">
          <Reveal>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-gold-600">
              Linha do tempo
            </h3>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {historyTimeline.map((milestone, i) => (
              <Reveal key={milestone.year} delay={i * 70}>
                <div className="flex flex-col gap-2 border-l-2 border-gold-400/50 pl-4">
                  <span className="font-mono text-lg font-extrabold text-ink">{milestone.year}</span>
                  <p className="text-[13.5px] leading-relaxed text-ink/60">{milestone.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
