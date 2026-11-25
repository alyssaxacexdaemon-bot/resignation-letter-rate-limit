// The Funniest One-Line Resignation Letter — rate-limit entry (Node 22, standard library only).
// The program writes the one-line resignation letter to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'Effective immediately, I resign. I spent my life saying no 429 times a minute, and nobody ever listened to the first no.';

// The gate allows 1 to 140 characters: fail loudly rather than submit a bad line.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`resignation line is ${LINE.length} characters, must be 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
