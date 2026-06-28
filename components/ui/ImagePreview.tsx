"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface ImagePreviewProps {
  src: string;
  alt: string;
}

export default function ImagePreview({ src, alt }: ImagePreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when preview is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="w-full h-full relative cursor-zoom-in group"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300 flex items-center justify-center">
          <div className="bg-slate-950/40 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
            <svg 
              className="w-6 h-6 text-white pointer-events-none" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out"
          >
            {/* Close Button Top Right of Screen */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-colors cursor-pointer border border-white/10 shadow-lg z-55"
              aria-label="Close preview"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full select-none">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              </div>
            </motion.div>
            
            {/* Caption */}
            <motion.p 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-sm font-medium text-slate-300 max-w-2xl text-center select-none"
            >
              {alt}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
