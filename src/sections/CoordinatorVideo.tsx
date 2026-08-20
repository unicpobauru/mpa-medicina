import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { InstagramIcon } from "../components/ui/SocialIcons";

export function CoordinatorVideo() {
  return (
    <section className="bg-ink py-20 sm:py-24 lg:py-32">
      <Container size="lg">
        <SectionHeading
          align="center"
          tone="dark"
          eyebrow="MPA · Coordenação acadêmica"
          title="Uma decisão pode transformar o rumo da sua carreira."
          description="À frente da coordenação, um médico que uniu cirurgia, longevidade e alta performance em uma trajetória de referência nacional."
          className="mx-auto max-w-[640px]"
        />

        <Reveal delay={140} className="mx-auto mt-12 max-w-[720px]">
          <div className="grid gap-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-panel sm:grid-cols-[220px_1fr]">
            <img
              src="images/esp-glauco-melo.jpg"
              alt="Dr. Glauco Melo — Coordenador do MPA"
              className="aspect-[3/4] w-full object-cover sm:aspect-auto sm:h-full"
            />
            <div className="flex flex-col gap-3 p-7 sm:p-9">
              <h3 className="text-xl font-extrabold text-white">Dr. Glauco Melo</h3>
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.06em] text-gold-400">
                Coordenador — MPA
              </p>
              <p className="text-[14px] leading-relaxed text-white/70">
                Cirurgião robótico certificado pela Intuitive (Atlanta-EUA). Pós-graduado em
                Cirurgia Minimamente Invasiva pelo Hospital Sírio-Libanês e em Obesidade e
                Emagrecimento pelo Hospital Albert Einstein. Fundador e CEO da Doc10X — Mentoria
                de Alta Performance para Médicos.
              </p>
              <p className="text-[12px] text-white/45">CRM 121235 · RQE 40355</p>
              <a
                href="https://www.instagram.com/drglaucomelo/"
                target="_blank"
                rel="noreferrer"
                className="mt-1 flex w-fit items-center gap-2 text-[13px] font-semibold text-gold-200 transition-colors hover:text-gold-400"
              >
                <InstagramIcon className="h-4 w-4" />
                @drglaucomelo
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
