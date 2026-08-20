import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";

export function Quote() {
  return (
    <section className="bg-ink py-20 sm:py-28 lg:py-32">
      <Container size="lg">
        <Reveal>
          <blockquote className="mx-auto flex max-w-[760px] flex-col items-center text-center">
            <span className="eyebrow text-gold-400">
              <span className="h-px w-6 bg-gold-400" aria-hidden />
              Cenário da medicina atual
            </span>
            <p
              className="text-balance mt-6 font-light italic leading-[1.45] tracking-[-0.005em] text-white/90"
              style={{ fontSize: "clamp(1.35rem, 1.05rem + 1.4vw, 2.1rem)" }}
            >
              &ldquo;Enquanto você lê isso, a medicina já mudou.&rdquo;
            </p>
            <footer className="mt-7 flex flex-col items-center gap-1">
              <span className="text-[15px] font-bold text-gold-400">
                Posicione-se como um médico de vanguarda
              </span>
              <span className="text-[13px] text-white/50">MPA — Medical Performance Academy</span>
            </footer>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
