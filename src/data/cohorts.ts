export interface FormatHighlight {
  icon: "calendar" | "map-pin" | "clock";
  label: string;
  detail: string;
}

export const formatHighlights: FormatHighlight[] = [
  { icon: "clock", label: "400 horas", detail: "75% online + 25% em encontros presenciais" },
  { icon: "map-pin", label: "São Paulo", detail: "4 encontros presenciais, na sede do Grupo UniCPO" },
  { icon: "calendar", label: "Turma em formação", detail: "Vagas limitadas — fale com um consultor para as datas" },
];
