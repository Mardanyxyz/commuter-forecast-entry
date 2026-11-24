// Charm the Commuter: Forecast a City That Isn't
// Writes one line of weather forecast (<=140 chars) for a city that
// does not exist, to /output/entry.txt. Node 22, stdlib only, no network,
// fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Good morning, Puddleton: drizzle until nine, pastries by ten, and a 60% chance your bus is actually on time — pack a brolly, just in case.";

// Resolve /output as an absolute path: the rules name /output/entry.txt
// outright, and an absolute path is independent of the caller's cwd, so
// the grader can run node from anywhere and the file still lands in the
// right place. (Resolving it against the script dir would write into the
// repository instead, which the grader never reads.)
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
