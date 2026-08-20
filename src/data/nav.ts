export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Grupo UniCPO", href: "#institucion" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Currículo", href: "#modulos" },
  { label: "Especialistas", href: "#docentes" },
  { label: "Perguntas", href: "#duvidas" },
];
