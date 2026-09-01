/**
 * Formulário próprio de inscrição do MPA (sem terceiros).
 * Ao enviar, faz um POST para o Web App do Google Apps Script, que grava
 * uma linha na Planilha Google. Não abre WhatsApp.
 */

/** URL de implantação ("Web app") do Google Apps Script do cliente. */
export const GOOGLE_SCRIPT_URL: string | null =
  "https://script.google.com/macros/s/AKfycbxdso2yQ3Ul2dzDpe89kM0MXLIpejpPLYMpbQYXyjv-i9qdX8qcNFQ3l9Gkz_1Xtvhl/exec";

/** Etiqueta fixa que viaja em CADA linha (coluna "Tag"), fora do formulário. */
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
 * Envia os dados para a Planilha Google.
 *
 * - `fetch` (não `sendBeacon`): agora a pessoa continua na página depois do
 *   envio, então não há pressa de "unload" — e o `sendBeacon` costuma chegar
 *   com corpo vazio no Apps Script, deixando a linha em branco.
 * - Sem header `Content-Type` custom: o corpo string vai como
 *   `text/plain;charset=UTF-8`, que NÃO dispara preflight CORS e chega em
 *   `e.postData.contents` do lado do Apps Script.
 * - As chaves vão repetidas em PT/ES/EN e em algumas variações de caixa,
 *   para cair na coluna certa seja qual for o `doPost` do cliente.
 */
export function logToGoogleSheet(data: LeadFormData): void {
  if (!GOOGLE_SCRIPT_URL) return;

  const dataBR = formatDataBR(new Date());
  const payload = JSON.stringify({
    nome: data.nome,
    Nome: data.nome,
    nombre: data.nome,
    name: data.nome,
    nomeCompleto: data.nome,

    telefone: data.telefone,
    Telefone: data.telefone,
    telefono: data.telefone,
    phone: data.telefone,
    celular: data.telefone,
    whatsapp: data.telefone,

    email: data.email,
    Email: data.email,
    "e-mail": data.email,
    mail: data.email,

    medico: data.medico,
    ehMedico: data.medico,
    esOdontologo: data.medico,
    isDoctor: data.medico,

    tag: LEAD_TAG,
    Tag: LEAD_TAG,
    origem: LEAD_TAG,

    data: dataBR,
    Data: dataBR,
    fecha: dataBR,
    timestamp: dataBR,
    date: dataBR,
  });

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    keepalive: true,
    redirect: "follow",
    body: payload,
  }).catch(() => {
    /* silencioso de propósito — a UI de sucesso não depende da resposta */
  });
}
