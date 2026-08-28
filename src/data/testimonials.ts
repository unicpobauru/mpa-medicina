export interface Testimonial {
  name: string;
  location: string;
  course: string;
  quote: string;
  image: string;
  instagram: string | null;
}

/**
 * Depoimentos de alunos do Grupo UniCPO (replicados do site do Diplomado em
 * Mini-Implantes, traduzidos para o Português). O MPA ainda não tem turma
 * formada — substituir por depoimentos de médicos do MPA após a primeira turma.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Karlita Romero",
    location: "Equador",
    course: "Aluna do Grupo UniCPO",
    quote:
      "Se eu não tivesse vindo, a verdade é que não teria nenhuma segurança para atender meus pacientes, nem mesmo para abrir minha própria clínica, porque **a prática e a teoria fazem o mestre**. Recomendo demais, porque conta com qualidade, tecnologia, **pacientes reais** e professores de primeiro nível.",
    image: "images/testimonial-karlita.jpg",
    instagram: "https://www.instagram.com/p/DRerzxpEbG9/",
  },
  {
    name: "Yndiana Garrido",
    location: "Venezuela",
    course: "Aluna do Grupo UniCPO",
    quote:
      "**Tudo o que vi no Instagram correspondeu à experiência que encontrei aqui**. Minha primeira impressão foi: quero fazer minha especialização aqui. Aprendi demais e posso dizer que **valeu cada centavo que investi**.",
    image: "images/testimonial-yndiana.jpg",
    instagram: "https://www.instagram.com/p/DbJcG4TvEFO/",
  },
  {
    name: "Mackarena del Pilar",
    location: "Chile",
    course: "Aluna do Grupo UniCPO",
    quote:
      "Para mim, vir para o Brasil agora significou **uma virada de chave importante** com relação à minha formação e ao que aprendi aqui. Eles realmente **te ensinam como a clínica funciona na prática**.",
    image: "images/testimonial-mackarena.jpg",
    instagram: "https://www.instagram.com/p/DZs2h4Fh2bS/",
  },
];
