export function formatWhatsapp(value: string) {
  const numbers = value.replace(/\D/g, "");

  const truncated = numbers.slice(0, 11);

  if (truncated.length === 0) return "";
  if (truncated.length <= 2) return `(${truncated}`;
  if (truncated.length <= 7) return `(${truncated.slice(0, 2)}) ${truncated.slice(2)}`

  return `(${truncated.slice(0, 2)}) ${truncated.slice(2, 7)}-${truncated.slice(7)}`
}