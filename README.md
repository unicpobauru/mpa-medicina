# MPA — Medical Performance Academy

Landing page em React + TypeScript + Tailwind CSS v4 para o **MPA — Medical Performance
Academy**, Pós-Graduação em Medicina Metabólica e Longevidade, uma realização do **Grupo
UniCPO** (FAINTER + UniCPO). Estrutura, componentes e comportamento herdados do modelo já
validado em `unicpo-miniimplantes` e `diplomado-alineadores`; conteúdo, imagens, paleta de
cores e idioma (Português-BR) são específicos deste curso, extraídos do material comercial
provisto (`MPA Medical Performance Academy.pptx`).

## Cómo ejecutar

```bash
cd mpa-medicina
npm install
npm run dev       # http://localhost:5173
npm run build      # build de produção em dist/
npm run preview    # serve o build de produção localmente
```

## O que é diferente em relação aos outros dois sites

- **Nova identidade visual**: fundo quase-preto/azul-marinho (`#0b1b33` ink, `#001360` /
  `#050b16` variações) + dourado premium (`#d4af37` / `#c6a23a`), extraídos diretamente das
  cores reais usadas no material do MPA — mais "luxo" do que a paleta verde-teal do Grupo
  UniCPO nos outros dois sites.
- **Nova logo**: MPA (preta e branca) substitui a logo UniCPO em todo o site — a marca UniCPO
  aparece apenas em texto, como "realização do Grupo UniCPO".
- **Público**: médicos formados no Brasil (não há foco internacional/estrangeiro como nos
  outros dois sites) — refletido no FAQ, no idioma 100% Português-BR e na ausência de menção a
  viagem/documentação para outro país.
- **Seção institucional**: virou "O Grupo UniCPO", contando a história completa (2005–2026,
  linha do tempo) e mencionando a FAINTER, em vez de focar só na UniCPO.
- **Tour 360°**: removido do fluxo da página a pedido do cliente. O componente
  `src/sections/VirtualTour.tsx` continua no código, só não é importado em `App.tsx` — para
  reativar, basta descomentar as duas linhas marcadas lá.
- **"Metodologia do coordenador"**: como não há vídeo do coordenador (e não fabricamos falas
  que ele não disse), essa seção virou um card com a foto e a bio real do Dr. Glauco Melo,
  extraída do material — nenhuma citação foi inventada.
- **Currículo**: em vez de um punhado de módulos T/P, é a matriz curricular completa do PPT —
  10 áreas, 400 horas, com o professor responsável por cada uma.

## Assets reais já integrados (`public/images/`)

| Arquivo | Origem no `.pptx` | Uso |
|---|---|---|
| `logo-mpa-black.png` / `logo-mpa-white.png` | slides diversos | Header (troca automática conforme scroll) e Footer |
| `favicon.png` | recortado do ícone da logo MPA | Ícone do navegador |
| `hero-mpa.jpg` | imagem de fundo do hero | Seção Hero |
| `dna-metodologia.jpg`, `dna-diferenciais.jpg` | imagens de fundo tech/DNA do deck | Metodologia e um card de Diferenciais |
| `predio-fainter-01/02/03.jpg` | fotos reais da fachada FAINTER | Seção "O Grupo UniCPO" e carrossel de Infraestrutura |
| `logo-fainter.png` | logo da FAINTER | Footer |
| `esp-*.jpg` (9 arquivos) | fotos reais dos especialistas | Seção "Coordenação acadêmica" e "Corpo docente" |

## O que falta completar antes de publicar

- **WhatsApp**: `src/lib/whatsapp.ts` está com um placeholder `[WHATSAPP_MPA]` — trocar pelo
  número real (formato `55DDDNUMERO`) assim que o cliente definir.
- **Testemunhos** (`src/data/testimonials.ts`): são ilustrativos — o MPA ainda não tem turma
  formada. Substituir por depoimentos reais depois da primeira turma.
- **Datas da turma**: não há datas fixas ainda (o PPT trazia apenas placeholders `00/00/0000`).
  A seção final usa um card genérico "turma em formação" — trocar por datas reais quando
  definidas (mesmo padrão de `cohorts.ts` usado nos outros sites, se preferir voltar a mostrar
  datas específicas).
- **Preço**: por decisão do cliente, o investimento (R$5.000 + matrícula R$997, conforme o PPT)
  não é exibido na página — fluxo 100% "fale com um consultor".

## Estrutura de pastas

```
src/
  components/ui/         # Button, Container, CountUp, DragCarousel, ImagePlaceholder, Reveal...
  sections/               # Header, Hero, Quote, About, Stats, Differentials, CoordinatorVideo,
                          # Methodology, Modules, Faculty, Testimonials, Facility, FAQ, FinalCTA,
                          # Footer — VirtualTour existe mas não é usado (ver acima)
  data/                   # conteúdo separado dos componentes (nav, about, faq, modules, etc.)
  hooks/useScrolled.ts    # header transparente → sólido
  lib/                    # whatsapp.ts (link único de contato), renderBold.tsx
  index.css               # design tokens (@theme) com a paleta MPA
```

## Deploy

**No ar em:** https://unicpobauru.github.io/mpa-medicina/

Diferente dos outros dois sites do grupo (que fazem deploy automático via GitHub Actions a
cada `git push`), este aqui está publicado direto do branch `gh-pages` — o token do `gh` CLI
usado nesta máquina não tem o escopo `workflow` necessário para o GitHub aceitar um arquivo em
`.github/workflows/`, e a autorização interativa (`gh auth refresh -s workflow`) falhou
repetidamente por um erro de rede (`context deadline exceeded`), então não deu pra configurar
o deploy automático desta vez.

**Para publicar uma atualização** (até resolver o escopo do token):

```bash
cd mpa-medicina
npm run build
# depois, copiar o conteúdo de dist/ para o branch gh-pages e dar push —
# me peça pra fazer isso quando tiver mudanças pra publicar.
```

Se no futuro conseguir autorizar o escopo `workflow` (repetir `gh auth refresh -h github.com -s
workflow` e confirmar em https://github.com/login/device), aí sim dá pra copiar o
`.github/workflows/deploy.yml` do `unicpo-miniimplantes` ou `diplomado-alineadores` para cá e
ativar o deploy automático — o `vite.config.ts` já está com o `base` certo (`/mpa-medicina/`)
para isso funcionar sem mudanças.
