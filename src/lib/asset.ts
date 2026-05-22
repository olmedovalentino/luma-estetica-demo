import { existsSync } from "node:fs";
import path from "node:path";

export function resolvePublicImage(primary: string, fallback: string) {
  const normalized = primary.startsWith("/") ? primary.slice(1) : primary;
  const absolutePath = path.join(process.cwd(), "public", normalized);

  return existsSync(absolutePath) ? primary : fallback;
}
