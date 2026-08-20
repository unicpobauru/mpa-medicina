# Vídeos (opcional)

O site do MPA hoje **não usa nenhum vídeo** — os 3 cards de "Nossos principais diferenciais"
usam fotos fixas (`video: null` em `src/data/differentials.ts`), já que não havia material em
vídeo específico do MPA no material comercial recebido.

## Se você quiser adicionar vídeos leves aos cards de diferenciais

1. Salve o arquivo nesta pasta (`public/videos/`) com o nome que preferir (ex:
   `diferencial-01.mp4`).
2. Me avise — eu troco `video: null` pelo caminho do arquivo em
   `src/data/differentials.ts` para o card correspondente. O componente já está pronto para
   tocar automaticamente com **autoplay, mute e loop**, e cai de volta na foto fixa se o
   arquivo não existir ou falhar ao carregar — nenhum ícone quebrado aparece.

## Recomendações para ficar "bem leve"

- **Formato:** `.mp4` (códec H.264) — máxima compatibilidade em todos os navegadores.
- **Sem áudio** — o vídeo vai com `muted`, então um arquivo sem trilha de áudio pesa menos.
- **Duração curta:** 4–8 segundos em loop é ideal para esse tipo de card.
- **Resolução:** 720px de largura já fica nítido no tamanho do card — não precisa de 1080p nem 4K.
- **Peso alvo:** idealmente menos de 2–3 MB por vídeo (carrega rápido até em 4G).
- Se o vídeo estiver em outro formato ou muito pesado, me manda mesmo assim que eu comprimo.
