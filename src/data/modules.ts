export interface Module {
  number: string;
  title: string;
  description: string;
  hours: number;
}

export const modules: Module[] = [
  {
    number: "01",
    title: "Emagrecimento e obesidade",
    description: "Fisiopatologia, terapêutica medicamentosa (GLP-1, Tirzepatida), estratégias avançadas e programas de acompanhamento. Prof.ª Dra. Thaís Moreschi.",
    hours: 65,
  },
  {
    number: "02",
    title: "Terapias de reposição hormonal",
    description: "Bases fisiológicas, reposição feminina e masculina, protocolos avançados e gestão clínica. Prof.ª Dra. Manuela Satake.",
    hours: 65,
  },
  {
    number: "03",
    title: "Terapias nutricionais injetáveis",
    description: "Fundamentos, terapias EV e IM, suporte gestacional, longevidade e performance, hands-on com casos clínicos reais. Prof.ª Dra. Manuela Satake.",
    hours: 60,
  },
  {
    number: "04",
    title: "Lipedema",
    description: "Fisiopatologia, avaliação, tratamento clínico, procedimentos e programas de tratamento. Prof. Dr. Maurício Mosna.",
    hours: 45,
  },
  {
    number: "05",
    title: "Transtornos sexuais masculinos e femininos",
    description: "Disfunções masculinas e femininas, terapias regenerativas e programas premium de sexualidade. Prof. Dr. Leonardo Horta.",
    hours: 40,
  },
  {
    number: "06",
    title: "Estética íntima masculina",
    description: "Anatomia e segurança, preenchimento peniano, bioestimuladores e gestão de posicionamento premium. Prof. Dr. Tiago Vilela Santos.",
    hours: 30,
  },
  {
    number: "07",
    title: "Estética íntima feminina",
    description: "Fundamentos, procedimentos, sexualidade e autoestima, protocolos integrados de rejuvenescimento íntimo. Prof.ª Dra. Maria Amália.",
    hours: 30,
  },
  {
    number: "08",
    title: "Modelo de negócio e vendas para clínicas",
    description: "Vendas éticas, posicionamento, autoridade médica, experiência premium do paciente e produtos de escala. Prof. Dr. Glauco Melo.",
    hours: 25,
  },
  {
    number: "09",
    title: "Gestão para clínicas",
    description: "Gestão financeira, comercial, de pessoas e operacional — indicadores, precificação e expansão. Prof. Victor Tóffoli.",
    hours: 25,
  },
  {
    number: "+",
    title: "Segurança, evidências, ética e regulação",
    description: "Medicina baseada em evidências, uso off-label, documentação, consentimento e discussão de casos controversos. Prof. Dr. Fábio Moraes.",
    hours: 15,
  },
];
