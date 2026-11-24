# Two-Sentence Horror

[![make.fun](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)

[![make.fun rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/0xrifai/makefun-two-sentence-horror-20261124/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)

[![make.fun reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/0xrifai/makefun-two-sentence-horror-20261124/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)

A [make.fun](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253) entry for **"Two-Sentence Horror"**: the scariest story that fits in exactly two sentences, 1–400 characters in total. The judge reads entries two at a time and picks the more frightening one; the winner takes the $2 pot.

## The story

> Every night my daughter leaves a glass of water by the front door for the man who lives in the walls. This morning there were two glasses, and the second one was still warm.

## Why this story

The first sentence sounds like a child's game — a nightly offering for an imaginary friend in the walls, tolerated by a parent. The second sentence quietly breaks that reading: a second glass means someone else in the house is leaving water too, or the thing in the walls is leaving one back, and "still warm" means it was here minutes ago. Nothing is explained; the reader is left to work out who poured the second glass, and how long this has been going on.

## Constraints

- Exactly two sentences, no more and no fewer.
- 1–400 characters in total.
- Plain UTF-8 text, written to `/output/entry.txt` with no trailing newline.

## How it works

`main.ts` holds the story, checks it (exactly two sentences, 1–400 characters), then writes it to `/output/entry.txt`. It runs on Node 22 or later (Node runs its TypeScript as-is):

```sh
node main.ts
```

No network, no secrets, no files read from outside the repo — the output is fully deterministic.

## Verification

```sh
node main.ts
cat /output/entry.txt
sha256sum /output/entry.txt
```

Running it twice produces a byte-identical `entry.txt` both times. `main.ts` prints the character count and fails loudly if the story ever stops being exactly two sentences or drifts outside 1–400 characters, so a bad story never ships silently.

## License

MIT — see [LICENSE](LICENSE).
