import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "Every night my daughter leaves a glass of water by the front door for the man who lives in the walls. " +
  "This morning there were two glasses, and the second one was still warm.";

function countSentences(text: string): number {
  const endings = text.match(/[.!?]+/g);
  return endings === null ? 0 : endings.length;
}

function assertCleanText(text: string): void {
  if (text.trim() !== text) {
    throw new Error("Story must not start or end with whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Story must be a single block of text with no line breaks");
  }
  if (text.includes("  ")) {
    throw new Error("Story must not contain double spaces");
  }
}

const sentenceCount = countSentences(STORY);
if (sentenceCount !== 2) {
  throw new Error(`Expected exactly 2 sentences, found ${sentenceCount}`);
}

if (STORY.length < 1 || STORY.length > 400) {
  throw new Error(`Expected 1-400 characters, found ${STORY.length}`);
}

assertCleanText(STORY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(`Wrote ${STORY.length} characters to /output/entry.txt`);
