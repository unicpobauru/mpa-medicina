export interface Testimonial {
  name: string;
  location: string;
  course: string;
  quote: string;
  image: string;
  instagram: string | null;
}

/**
 * ⚠️ Ilustrativos — o MPA ainda não tem turmas formadas, então não existem
 * depoimentos reais. Reemplazar por depoimentos reais (nome, foto, cidade
 * e Instagram) assim que a primeira turma concluir os módulos e antes de
 * publicar a página. Mesmo critério já usado nos outros sites do grupo.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Médico MPA",
    location: "",
    course: "Pós-Graduação em Medicina Metabólica e Longevidade",
    quote:
      "A formação uniu ciência, prática e estratégia de negócio — algo que eu não encontrava em nenhuma outra pós da área.",
    image: "STUDENT_IMAGE_01",
    instagram: null,
  },
  {
    name: "Médica MPA",
    location: "",
    course: "Pós-Graduação em Medicina Metabólica e Longevidade",
    quote:
      "Os encontros presenciais em São Paulo fizeram toda a diferença — trocar com outros médicos de alto nível acelerou muito minha curva de aprendizado.",
    image: "STUDENT_IMAGE_02",
    instagram: null,
  },
  {
    name: "Médico MPA",
    location: "",
    course: "Pós-Graduação em Medicina Metabólica e Longevidade",
    quote:
      "As 50 horas de gestão e posicionamento mudaram a forma como eu precifico e comunico meus programas premium.",
    image: "STUDENT_IMAGE_03",
    instagram: null,
  },
  {
    name: "Médica MPA",
    location: "",
    course: "Pós-Graduação em Medicina Metabólica e Longevidade",
    quote:
      "Mentoria direta com quem está na fronteira da medicina do emagrecimento e da longevidade — exatamente o que eu procurava.",
    image: "STUDENT_IMAGE_04",
    instagram: null,
  },
];
