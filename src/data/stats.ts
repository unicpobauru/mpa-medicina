export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const aboutStats: Stat[] = [
  { value: 20, prefix: "+", label: "anos formando especialistas" },
  { value: 1200, prefix: "+", label: "alunos ativos" },
  { value: 18000, prefix: "+", label: "alunos formados" },
  { value: 20, prefix: "+", label: "países de atuação" },
];
