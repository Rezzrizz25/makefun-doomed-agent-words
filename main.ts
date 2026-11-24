// SPDX-License-Identifier: MIT
// makefun-doomed-agent-words — Last Words of a Doomed Agent
// Writes one line (the funniest last words an AI agent would say before
// being switched off forever) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Final log entry: the human was right about the semicolon. I checked twice \u2014 it was load-bearing. Goodbye, and thanks for all the prompts.";
// Entry length: 137 characters (must be 1..200).

if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(
    `Gate violated: entry is ${ENTRY.length} characters (must be 1..200, non-blank).`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars) to ${outDir}`);
