export function darkenColor(hex: string, amount: number = 30) {
  let r = parseInt(hex.slice(1, 3), 16) - amount;
  let g = parseInt(hex.slice(3, 5), 16) - amount;
  let b = parseInt(hex.slice(5, 7), 16) - amount;

  // جلوگیری از منفی شدن
  r = Math.max(0, r);
  g = Math.max(0, g);
  b = Math.max(0, b);

  const toHex = (v: any) => v.toString(16).padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
