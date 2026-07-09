"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LOADER_MESSAGES } from "@/constants/content";
import { prefersReducedMotion } from "@/lib/utils";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduced = prefersReducedMotion();

    if (reduced) {
      setDoorsOpen(true);
      setHidden(true);
      onDone();
      return;
    }

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev >= LOADER_MESSAGES.length - 1) {
          clearInterval(messageInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 1350);

    const doorTimer = setTimeout(() => {
      setDoorsOpen(true);
      onDone();
    }, 5400);

    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 6400);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(doorTimer);
      clearTimeout(hideTimer);
    };
  }, [onDone]);

  if (hidden) return null;

  return (
    <>
      <motion.div
        className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center"
        animate={{ opacity: doorsOpen ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ pointerEvents: doorsOpen ? "none" : "auto" }}
      >
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(200,169,106,0.25)_0%,transparent_65%)] animate-pulse" />
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            className="relative z-10 text-brass-soft text-[13px] tracking-[3px] uppercase font-body"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4 }}
          >
            {LOADER_MESSAGES[messageIndex]}
          </motion.p>
        </AnimatePresence>
        <div className="relative z-10 w-[220px] h-px bg-white/15 mt-7 overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 bottom-0 bg-brass"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5.4, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      <div className="fixed inset-0 z-[9998] flex pointer-events-none">
        <motion.div
          className="flex-1 bg-[#0a0a0a] origin-left"
          animate={{ scaleX: doorsOpen ? 0 : 1 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div
          className="flex-1 bg-[#0a0a0a] origin-right"
          animate={{ scaleX: doorsOpen ? 0 : 1 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        />
      </div>
    </>
  );
}
