import { existsSync } from "node:fs";
import path from "node:path";

function toPublicPath(assetPath: string) {
  const normalized = assetPath.startsWith("/") ? assetPath.slice(1) : assetPath;
  return path.join(process.cwd(), "public", normalized);
}

export function hasPublicImage(assetPath: string) {
  return existsSync(toPublicPath(assetPath));
}

export function resolvePublicImage(primary: string, fallback: string) {
  return hasPublicImage(primary) ? primary : fallback;
}
