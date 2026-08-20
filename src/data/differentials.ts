export interface Differential {
  icon: string;
  title: string;
  description: string;
  image: string;
  video: string | null;
}

export const differentials: Differential[] = [
  {
    icon: "award",
    title: "Autoridade médica",
    description: "Posicionamento e presença digital que geram procura espontânea — torne-se a referência que pacientes de alto padrão procuram.",
    image: "images/esp-glauco-melo.jpg",
    video: null,
  },
  {
    icon: "users",
    title: "Comunidade de elite",
    description: "Aprenda lado a lado com especialistas de referência no país, em uma turma reduzida de médicos com o mesmo padrão de exigência.",
    image: "images/dna-diferenciais.jpg",
    video: null,
  },
  {
    icon: "trending-up",
    title: "Sempre à frente",
    description: "Protocolos e evidências mais atuais, antes de virarem tendência — pioneirismo com responsabilidade médica e regulatória.",
    image: "images/dna-metodologia.jpg",
    video: null,
  },
];
