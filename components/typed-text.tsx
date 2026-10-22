"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { usePrefersReducedMotion } from "@/lib/hooks";

export type Segment = { text: string; className?: string };
export type Block = { className?: string; segments: Segment[] };

type TypedTextProps = {
  blocks: Block[];
  /** Typing begins once this turns true (after a couple of cursor blinks). */
  start: boolean;
};

const BLINK_MS = 1000;
const CHARS_PER_SECOND = 450;
const LINGER_MS = 1500;

// Writes its text out like it is being typed. The full text is always in the DOM (only transparent until typed),
// so layout never shifts and screen readers get everything.
export default function TypedText({ blocks, start }: TypedTextProps) {
  const reduceMotion = usePrefersReducedMotion();
  const [phase, setPhase] = useState<"idle" | "typing" | "done" | "finished">("idle");
  const [typed, setTyped] = useState(0);
  const total = blocks.reduce((sum, block) => sum + block.segments.reduce((n, s) => n + s.text.length, 0), 0);

  useEffect(() => {
    if (!start || reduceMotion) return;
    const timer = setTimeout(() => setPhase("typing"), BLINK_MS);
    return () => clearTimeout(timer);
  }, [start, reduceMotion]);

  useEffect(() => {
    if (phase !== "typing") return;
    const begin = performance.now();
    let frame = requestAnimationFrame(function tick(now) {
      const count = Math.min(total, Math.floor(((now - begin) / 1000) * CHARS_PER_SECOND));
      setTyped(count);
      if (count < total) frame = requestAnimationFrame(tick);
      else setPhase("done");
    });
    return () => cancelAnimationFrame(frame);
  }, [phase, total]);

  useEffect(() => {
    if (phase !== "done") return;
    const timer = setTimeout(() => setPhase("finished"), LINGER_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  const count = reduceMotion ? total : typed;
  const showCursor = start && !reduceMotion && phase !== "finished";

  // The caret lives in the first segment that is not fully typed yet (the last one once everything is).
  const lengths = blocks.flatMap((block) => block.segments.map((s) => s.text.length));
  let cursorSegment = lengths.length - 1;
  for (let i = 0, end = 0; i < lengths.length; i++) {
    end += lengths[i];
    if (count < end) {
      cursorSegment = i;
      break;
    }
  }

  // Block borders stay invisible until the typing reaches their block.
  const blockStarts = blocks.map((_, i) => blocks.slice(0, i).reduce((n, b) => n + b.segments.reduce((m, s) => m + s.text.length, 0), 0));

  let index = 0;
  let segmentStart = 0;

  return (
    <>
      {blocks.map((block, blockIndex) => (
        <p key={blockIndex} className={clsx(block.className, blockStarts[blockIndex] > 0 && blockStarts[blockIndex] >= count && "!border-transparent")}>
          {block.segments.map((segment, segmentIndex) => {
            const visible = Math.max(0, Math.min(segment.text.length, count - segmentStart));
            const hasCursor = showCursor && index === cursorSegment;
            segmentStart += segment.text.length;
            index++;
            return (
              <span key={segmentIndex} className={segment.className}>
                {segment.text.slice(0, visible)}
                {hasCursor && <span aria-hidden className={clsx("typed-cursor", phase === "typing" && "typed-cursor-solid")} />}
                <span className="opacity-0">{segment.text.slice(visible)}</span>
              </span>
            );
          })}
        </p>
      ))}
    </>
  );
}
