"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { Certificate } from "@/constants/content";

export function CertificateLightbox({
  certificate,
  onClose,
}: {
  certificate: Certificate | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!certificate) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center px-6 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${certificate.title} certificate, enlarged`}
        >
          <motion.div
            className="relative w-full max-w-lg aspect-[4/3] bg-cream dark:bg-ink-deep border border-brass p-10 flex flex-col justify-between"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close certificate view"
              className="absolute top-4 right-4 w-9 h-9 rounded-full border border-ink/10 dark:border-cream/10 flex items-center justify-center text-ink dark:text-cream hover:border-brass hover:text-brass transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass"
            >
              <X size={16} strokeWidth={1.8} />
            </button>

            <div className="w-14 h-14 rounded-full border border-brass flex items-center justify-center text-brass text-xl font-display">
              H
            </div>

            <div>
              <p className="text-[11px] tracking-[2px] uppercase text-brass mb-2">
                Certificate of completion
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-medium mb-2">
                {certificate.title}
              </h3>
              <p className="text-sm opacity-60">{certificate.issuer}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
