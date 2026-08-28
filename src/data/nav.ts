export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "FAINTER", href: "#institucion" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Conteúdo", href: "#modulos" },
  { label: "Corpo docente", href: "#docentes" },
  { label: "Perguntas", href: "#duvidas" },
];
