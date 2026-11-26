// SPDX-License-Identifier: MIT
// mf-funniest-office-joke — entry for "The Funniest Office Joke, Judged Head to Head"
// (make.fun competition u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c).
// The program writes one original one-line office joke to /output/entry.txt and
// prints it to stdout. It is fully deterministic: the same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I told my calendar I needed focus time, so it booked me a meeting to discuss it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
