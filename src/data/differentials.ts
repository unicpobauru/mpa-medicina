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
    description: "Posicionamento e presença digital que geram procura espontânea.",
    image: "images/dif-autoridade-medica.jpg",
    video: null,
  },
  {
    icon: "users",
    title: "Comunidade de elite",
    description: "Aprenda lado a lado com especialistas de referência no país.",
    image: "images/dif-comunidade-elite.jpg",
    video: null,
  },
  {
    icon: "trending-up",
    title: "Sempre à frente",
    description: "Protocolos e evidências mais atuais, antes de virarem tendência.",
    image: "images/dif-sempre-a-frente.jpg",
    video: null,
  },
  {
    icon: "flask",
    title: "Validação científica",
    description: "Aprenda com um método científico, validado para transformar conhecimento em prática.",
    image: "images/dif-validacao-cientifica.jpg",
    video: null,
  },
];
