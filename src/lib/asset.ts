import { existsSync } from "node:fs";
import path from "node:path";

export function resolvePublicImage(primary: string, fallback: string) {
  const normalized = primary.startsWith("/") ? primary.slice(1) : primary;
  const localPath = path.join(process.cwd(), "public", normalized.replace(/^images\//, "images/"));

  return existsSync(localPath) ? primary : fallback;
}
