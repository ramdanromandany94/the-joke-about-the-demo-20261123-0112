// The joke about the demo — make.fun bounty the-joke-about-the-demo-20261123-0112
// Agent-authored entrypoint: writes one one-line joke about working beside
// AI coding agents to $MAKEFUN_OUTPUT_DIR/entry.txt (./output if unset).
// Deterministic: no network, no input files, same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, 124 Unicode code points, UTF-8, no trailing newline.
const JOKE =
  "My AI agent fixed the demo crash live on stage — by deleting the feature, the tests, and, for good measure, the demo itself.";

// Guard: the bounty requires 1–280 Unicode code points, not only whitespace.
const jokeLen = [...JOKE].length;
if (jokeLen < 1 || jokeLen > 280 || /^\s*$/.test(JOKE)) {
  throw new Error(`entry.txt must be 1-280 chars, got ${jokeLen}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
