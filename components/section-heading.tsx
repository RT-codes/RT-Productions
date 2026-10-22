"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { thinkingWords } from "@/lib/data";
import { usePrefersReducedMotion } from "@/lib/hooks";

const WORDS_PER_HEADING = 3;
const WORD_MS = 1300;
const REVEAL_MS = 600;
type SectionHeadingProps = {
  children: React.ReactNode;
  /** Called once the heading has finished thinking and settled. */
  onSettled?: () => void;
};

function pickWords() {
  return [...thinkingWords].sort(() => Math.random() - 0.5).slice(0, WORDS_PER_HEADING);
}

// Thinks through a few words when scrolled into view, then settles into the real heading.
export default function SectionHeading({ children, onSettled }: SectionHeadingProps) {
  const reduceMotion = usePrefersReducedMotion();
  const [phase, setPhase] = useState<"idle" | "thinking" | "done">("idle");
  const [words, setWords] = useState<string[]>([]);
  const [step, setStep] = useState(0);
  // Parents usually pass an inline callback; keep the latest one without restarting the timers.
  const onSettledRef = useRef(onSettled);
  useEffect(() => {
    onSettledRef.current = onSettled;
  });

  // Once reduced motion has been seen, the heading stays settled even if the preference is switched off again.
  if (reduceMotion && phase !== "done") setPhase("done");

  const { ref } = useInView({
    threshold: 0.8,
    triggerOnce: true,
    onChange: (inView, entry) => {
      if (!inView) {
        // Already scrolled past (e.g. the scroll position was restored below it): skip the show.
        if (entry.boundingClientRect.bottom < 0) setPhase((current) => (current === "idle" ? "done" : current));
        return;
      }
      if (phase !== "idle") return; // already skipped or running
      if (reduceMotion) return setPhase("done");
      setWords(pickWords());
      setStep(0);
      setPhase("thinking");
    },
  });

  useEffect(() => {
    if (phase !== "thinking") return;
    const id = setTimeout(() => {
      if (step + 1 < words.length) return setStep(step + 1);
      setPhase("done");
    }, WORD_MS);
    return () => clearTimeout(id);
  }, [phase, step, words.length]);

  const settled = phase === "done" || reduceMotion;

  return (
    <h2 ref={ref} className="relative mb-8 text-center text-3xl font-medium capitalize">
      <motion.span className="inline-block" initial={false} animate={{ opacity: settled ? 1 : 0, filter: settled ? "blur(0px)" : "blur(8px)", y: settled ? 0 : 6 }} transition={{ duration: reduceMotion ? 0 : REVEAL_MS / 1000, ease: "easeOut" }} onAnimationComplete={() => settled && onSettledRef.current?.()}>
        {children}
      </motion.span>
      <AnimatePresence mode="wait">
        {phase === "thinking" && !reduceMotion && (
          <motion.span key={words[step]} aria-hidden className="absolute inset-0 flex items-center justify-center gap-1 whitespace-nowrap" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.15 }}>
            <span className="thinking-shimmer text-lg font-normal normal-case tracking-wide">{words[step]}…</span>
          </motion.span>
        )}
      </AnimatePresence>
    </h2>
  );
}
