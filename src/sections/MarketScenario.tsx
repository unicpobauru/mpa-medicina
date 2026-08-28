import { ArrowRight, TrendingUp } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { CountUp } from "../components/ui/CountUp";
import { SectionHeading } from "../components/ui/SectionHeading";
import { marketScenario, type MarketStat } from "../data/marketScenario";

function StatValue({ stat }: { stat: MarketStat }) {
  if (typeof stat.toValue === "number") {
    return <CountUp end={stat.toValue} suffix={stat.toSuffix ?? ""} />;
  }
  return <>{stat.toText}</>;
}

export function MarketScenario() {
  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={marketScenario.eyebrow}
          title={marketScenario.title}
          description={marketScenario.intro}
          className="mx-auto max-w-[640px]"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {marketScenario.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-line bg-white p-7 shadow-card">
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink/50">
                  {stat.label}
                </p>

                <div className="flex items-end gap-3">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-medium text-ink/40">{stat.fromYear}</span>
                    <span className="text-lg font-bold text-ink/45">{stat.fromText}</span>
                  </div>
                  <ArrowRight className="mb-1 h-4 w-4 shrink-0 text-gold-500" strokeWidth={2.5} />
                  <div className="flex flex-col">
                    <span className="text-[11px] font-medium text-gold-600">{stat.toYear}</span>
                    <span
                      className="font-extrabold leading-none text-ink"
                      style={{ fontSize: "clamp(2rem, 1.5rem + 1.6vw, 2.75rem)" }}
                    >
                      <StatValue stat={stat} />
                    </span>
                  </div>
                  <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-gold-200 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-ink">
                    <TrendingUp className="h-3 w-3" strokeWidth={2.5} />
                    {stat.badge}
                  </span>
                </div>

                <p className="text-[13.5px] leading-relaxed text-ink/60">{stat.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280}>
          <div className="mt-8 flex flex-col gap-3 rounded-3xl bg-ink p-8 text-center sm:p-10">
            <p className="mx-auto max-w-[620px] text-balance text-[17px] font-semibold leading-snug text-white sm:text-lg">
              {marketScenario.punch}
            </p>
            <p className="text-[11.5px] text-white/40">{marketScenario.source}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
