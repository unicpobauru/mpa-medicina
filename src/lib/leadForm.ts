/**
 * Formulário próprio de inscrição do MPA (sem terceiros).
 * Ao enviar, registra uma linha em uma Planilha Google via Apps Script
 * ("fire and forget" — o Apps Script nem sempre expõe CORS legível do
 * navegador, por isso `no-cors`/`sendBeacon`: o request sai e a linha é
 * gravada, só não conseguimos ler a confirmação de volta).
 *
 * NÃO abre WhatsApp — o contato passa a ser feito pela equipe a partir do
 * lead gravado na planilha.
 */

/** URL de implantação ("Web app") do Google Apps Script do cliente. */
export const GOOGLE_SCRIPT_URL: string | null =
  "https://script.google.com/macros/s/AKfycbxdso2yQ3Ul2dzDpe89kM0MXLIpejpPLYMpbQYXyjv-i9qdX8qcNFQ3l9Gkz_1Xtvhl/exec";

/**
 * Etiqueta fixa que viaja em CADA linha da planilha (coluna "Tag"), sem
 * aparecer no formulário. Serve para identificar a origem do dado.
 */
const LEAD_TAG = "[LP-MPA-FORM]";

export interface LeadFormData {
  nome: string;
  telefone: string;
  email: string;
  /** "Sim" | "Não" — se a pessoa é médica. */
  medico: string;
}

/** Data no padrão brasileiro (DD-MM-AAAA HH:mm:ss, 24h, fuso de São Paulo). */
function formatDataBR(date: Date): string {
  const parts = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "00";
  const hour = get("hour") === "24" ? "00" : get("hour");
  return `${get("day")}-${get("month")}-${get("year")} ${hour}:${get("minute")}:${get("second")}`;
}

/**
 * Envia os dados para a Planilha Google sem bloquear nem depender da
 * resposta. Manda os campos com nomes em PT e ES ao mesmo tempo, para
 * cair na coluna certa independentemente de como o Apps Script do cliente
 * leia o payload.
 */
export function logToGoogleSheet(data: LeadFormData): void {
  if (!GOOGLE_SCRIPT_URL) return;

  const dataBR = formatDataBR(new Date());
  const payload = JSON.stringify({
    nome: data.nome,
    nombre: data.nome,
    telefone: data.telefone,
    telefono: data.telefone,
    email: data.email,
    medico: data.medico,
    esOdontologo: data.medico,
    tag: LEAD_TAG,
    data: dataBR,
    fecha: dataBR,
  });

  if (typeof navigator !== "undefined" && navigator.sendBeacon) {
    const blob = new Blob([payload], { type: "text/plain;charset=UTF-8" });
    if (navigator.sendBeacon(GOOGLE_SCRIPT_URL, blob)) return;
  }

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    keepalive: true,
    headers: { "Content-Type": "text/plain" },
    body: payload,
  }).catch(() => {
    /* silencioso de propósito */
  });
}
