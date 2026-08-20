import { WHATSAPP_URL } from "../lib/whatsapp";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { formatHighlights } from "../data/cohorts";

const icons = { calendar: CalendarDays, "map-pin": MapPin, clock: Clock };

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #d4af37 0%, transparent 70%)" }}
        aria-hidden
      />
      <Container size="lg">
        <div className="relative flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2
              className="text-balance font-extrabold leading-[1.15] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem)" }}
            >
              Você vai liderar essa mudança ou vai correr atrás dela?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-[560px] text-[15px] leading-relaxed text-white/65 sm:text-base">
              Vagas limitadas por turma — fale com um consultor e garanta a sua.
            </p>
          </Reveal>

          <div className="mt-4 grid w-full max-w-[720px] gap-4 sm:grid-cols-3">
            {formatHighlights.map((item, i) => {
              const Icon = icons[item.icon];
              return (
                <Reveal key={item.label} delay={140 + i * 90}>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-white/10"
                  >
                    <Icon className="h-5 w-5 text-gold-400" strokeWidth={1.75} />
                    <p className="text-lg font-extrabold text-white">{item.label}</p>
                    <p className="text-[12.5px] leading-relaxed text-white/55">{item.detail}</p>
                  </a>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={420} className="mt-4">
            <Button href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="ghost" size="lg">
              Quero falar com um consultor
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
