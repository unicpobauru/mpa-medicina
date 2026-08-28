export interface FormatHighlight {
  icon: "calendar" | "map-pin" | "clock";
  label: string;
  detail: string;
}

export const formatHighlights: FormatHighlight[] = [
  { icon: "clock", label: "400 horas", detail: "75% online, no seu ritmo + 25% presencial em São Paulo" },
  { icon: "calendar", label: "Início em 06/02/2027", detail: "Turma de fundadores — vagas limitadas" },
  { icon: "map-pin", label: "4 encontros presenciais", detail: "Em São Paulo, ao longo de 2027 e 2028" },
];

/** Datas dos encontros presenciais (PPT do MPA, slide de Datas). */
export interface Encontro {
  ord: string;
  date: string;
}

export const encontrosPresenciais: Encontro[] = [
  { ord: "1º encontro", date: "08 e 09 / mai / 2027" },
  { ord: "2º encontro", date: "04 e 05 / set / 2027" },
  { ord: "3º encontro", date: "05 e 06 / fev / 2028" },
  { ord: "4º encontro", date: "01 e 02 / jul / 2028" },
];
