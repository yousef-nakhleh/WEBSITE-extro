import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const YT_ID = "Hf6abfL1la4";

export default function HomePage() {
  const taglineFull = "Un'esperienza trentennale";
  const [tagline, setTagline] = useState("");

  // Typewriter effect for the tagline
  useEffect(() => {
    let i = 0;
    const speed = 70; // ms per character
    const timer = setInterval(() => {
      setTagline(taglineFull.slice(0, i + 1));
      i++;
      if (i >= taglineFull.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Full viewport hero with YouTube background */}
      <main
        className="relative flex h-screen w-full items-center justify-center overflow-hidden"
        aria-label="EXTRO Parrucchieri landing hero"
      >
        {/* YouTube background (cover) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Optional poster fallback under iframe to avoid grey flash */}
          <img
            src="/assets/saloon.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <iframe
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            // Scale the iframe to always cover the viewport (16:9 math)
            style={{
              width: "max(100vw, 177.78vh)", // 16/9 = 1.7778
              height: "max(56.25vw, 100vh)", // 9/16 = 0.5625
              pointerEvents: "none",
            }}
            src={`https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&mute=1&controls=0&playsinline=1&modestbranding=1&rel=0&loop=1&playlist=${YT_ID}`}
            title="EXTRO Parrucchieri"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
          {/* Subtle overlay for legibility */}
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Foreground content: CTA + Tagline */}
        <div className="relative z-10 flex flex-col items-center gap-4 text-center">
          {/* CTA grows from 0 to full size */}
          <a
            href="#booking"
            className="select-none bg-white px-8 py-4 text-base font-semibold uppercase tracking-[0.12em] text-black shadow-xl hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/70 animate-cta-pop will-change-transform"
          >
            PRENOTA ORA
          </a>

          {/* Tagline with typewriter + cursive vibe */}
          <p
            className="text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
            style={{
              fontFamily:
                "ui-script, 'Brush Script MT', 'Lucida Handwriting', cursive",
            }}
          >
            <span className="text-2xl md:text-3xl italic tracking-tight align-middle">
              {tagline}
            </span>
            <span className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[3px] animate-caret rounded bg-white/90 align-middle" />
          </p>
        </div>
      </main>

      {/* Local styles for animations */}
      <style>{`
        @keyframes cta-pop {
          0%   { transform: scale(0); opacity: 0; }
          60%  { transform: scale(1.06); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-cta-pop {
          animation: cta-pop 800ms cubic-bezier(.2,.9,.2,1) both;
        }
        @keyframes caret-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-caret {
          animation: caret-blink 1.1s steps(1, end) infinite;
        }
      `}</style>
    </div>
  );
}