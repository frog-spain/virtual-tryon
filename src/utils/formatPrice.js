export function formatPrice(cents) {
  const price = (cents / 100).toFixed(2);
  return `${price} €`;
}
