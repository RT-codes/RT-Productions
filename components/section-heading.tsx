"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { thinkingWords } from "@/lib/data";
import { usePrefersReducedMotion } from "@/lib/hooks";

const WORDS_PER_HEADING = 3;
const WORD_MS = 700;
const SPINNER_FRAMES = ["·", "✢", "✳", "✶", "✻", "✽"];

type SectionHeadingProps = {
  children: React.ReactNode;
};

function pickWords() {
  return [...thinkingWords].sort(() => Math.random() - 0.5).slice(0, WORDS_PER_HEADING);
}

function Spinner() {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % SPINNER_FRAMES.length), 120);
    return () => clearInterval(id);
  }, []);
  return <span className="inline-block w-[1.2em] text-center text-[#d97757]">{SPINNER_FRAMES[frame]}</span>;
}

// Thinks through a few words when scrolled into view, then settles into the real heading.
export default function SectionHeading({ children }: SectionHeadingProps) {
  const reduceMotion = usePrefersReducedMotion();
  const [phase, setPhase] = useState<"idle" | "thinking" | "done">("idle");
  const [words, setWords] = useState<string[]>([]);
  const [step, setStep] = useState(0);

  const { ref } = useInView({
    threshold: 0.8,
    triggerOnce: true,
    onChange: (inView) => {
      if (!inView || reduceMotion) return;
      setWords(pickWords());
      setStep(0);
      setPhase("thinking");
    },
  });

  useEffect(() => {
    if (phase !== "thinking") return;
    const id = setTimeout(() => (step + 1 < words.length ? setStep(step + 1) : setPhase("done")), WORD_MS);
    return () => clearTimeout(id);
  }, [phase, step, words.length]);

  const settled = phase === "done" || reduceMotion;

  return (
    <h2 ref={ref} className="relative mb-8 text-center text-3xl font-medium capitalize">
      <motion.span className="inline-block" initial={false} animate={{ opacity: settled ? 1 : 0, filter: settled ? "blur(0px)" : "blur(8px)", y: settled ? 0 : 6 }} transition={{ duration: 0.6, ease: "easeOut" }}>
        {children}
      </motion.span>
      <AnimatePresence mode="wait">
        {phase === "thinking" && (
          <motion.span key={words[step]} aria-hidden className="absolute inset-0 flex items-center justify-center gap-1 whitespace-nowrap" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.15 }}>
            <Spinner />
            <span className="thinking-shimmer">{words[step]}…</span>
          </motion.span>
        )}
      </AnimatePresence>
    </h2>
  );
}
