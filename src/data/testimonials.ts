export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
  instagram: string | null;
}

/**
 * Falas dos próprios professores do MPA sobre por que a formação existe e
 * para quem ela é — posicionamento, não depoimento de aluno (a primeira
 * turma ainda não se formou). O Dr. Glauco Melo, coordenador, vem primeiro.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Dr. Glauco Melo",
    role: "Coordenador do MPA",
    quote:
      "Criei o MPA para o médico que já entendeu que dominar a clínica não basta. Aqui a gente une **ciência, prática e um modelo de negócio** que sustenta a autoridade que você constrói.",
    image: "images/esp-glauco-melo.jpg",
    instagram: "https://www.instagram.com/drglaucomelo/",
  },
  {
    name: "Dra. Manuela Satake",
    role: "Professora · Terapias Nutricionais Injetáveis",
    quote:
      "O mercado pede médicos que saibam ir além da consulta padrão. No MPA você sai com o **protocolo na mão** — prescrição, segurança e hands-on — pronto para aplicar na segunda-feira.",
    image: "images/esp-manuela-satake.jpg",
    instagram: "https://www.instagram.com/dra_manuelasatake/",
  },
  {
    name: "Dr. Maurício Mosna",
    role: "Professor · Lipedema e Longevidade",
    quote:
      "O que diferencia o MPA é a **visão integrada**: o paciente não cabe em uma única especialidade. O médico sai daqui enxergando metabolismo, hormônios e longevidade como um sistema só.",
    image: "images/esp-mauricio-mosna.jpg",
    instagram: "https://www.instagram.com/dr.mauriciomosna/",
  },
];
