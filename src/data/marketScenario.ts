export interface MarketStat {
  label: string;
  fromYear: string;
  fromText: string;
  toYear: string;
  /** Valor final para a contagem animada (inteiro). Use `toText` quando não for inteiro. */
  toValue?: number;
  toSuffix?: string;
  toText?: string;
  badge: string;
  note: string;
}

/** Dados do "Cenário da Medicina Atual" — PPT do MPA, slide 10
 *  (Fonte: Demografia Médica no Brasil 2025 — Ministério da Saúde · FMUSP · AMB). */
export const marketScenario = {
  eyebrow: "Panorama do mercado médico",
  title: "A competição virou o novo normal.",
  intro:
    "O Brasil forma médicos em ritmo recorde. Num mercado de abundância, o diploma deixou de ser diferencial — quem cresce é quem se posiciona.",
  stats: [
    {
      label: "Escolas médicas no Brasil",
      fromYear: "2015",
      fromText: "257",
      toYear: "2025",
      toValue: 494,
      badge: "≈ 2×",
      note: "As vagas de graduação cresceram quase 185% em uma década.",
    },
    {
      label: "Novos médicos por ano",
      fromYear: "2015",
      fromText: "18 mil",
      toYear: "2025",
      toValue: 36,
      toSuffix: " mil",
      badge: "2×",
      note: "O dobro de profissionais entrando no mercado, todo ano.",
    },
    {
      label: "Médicos em atividade",
      fromYear: "2026",
      fromText: "635 mil",
      toYear: "2035",
      toText: "1,15 mi",
      badge: "projeção",
      note: "Quase o dobro de profissionais em apenas 10 anos.",
    },
  ] as MarketStat[],
  punch:
    "Em um mercado de abundância, quem é lembrado é quem se posiciona e se diferencia.",
  source: "Fonte: Demografia Médica no Brasil 2025 (Ministério da Saúde · FMUSP · AMB).",
};
