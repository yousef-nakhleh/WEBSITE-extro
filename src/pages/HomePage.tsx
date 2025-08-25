import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const YT_ID = "Hf6abfL1la4";

export default function HomePage() {
  const [tagline, setTagline] = useState("");
  const taglineFull = "Un'esperienza trentennale";

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTagline(taglineFull.slice(0, i + 1));
      i++;
      if (i >= taglineFull.length) clearInterval(timer);
    }, 150); // slower typing
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />

      {/* HERO */}
      <main className="relative flex h-screen w-full items-center justify-center overflow-hidden text-center">
        {/* Background video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <iframe
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "max(100vw, 177.78vh)",
              height: "max(56.25vw, 100vh)",
              pointerEvents: "none",
            }}
            src={`https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&mute=1&controls=0&playsinline=1&modestbranding=1&rel=0&loop=1&playlist=${YT_ID}`}
            title="EXTRO Parrucchieri"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center">
          <a
            href="#booking"
            className="select-none bg-white px-8 py-4 text-sm md:text-base font-semibold uppercase tracking-[0.12em] text-black shadow-xl hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/70 animate-cta-pop"
          >
            PRENOTA ORA
          </a>

          {/* typewriter tagline */}
          <p
            className="mt-2 text-white text-lg md:text-2xl drop-shadow-md"
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            {tagline}
            <span className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[3px] animate-caret bg-white/80" />
          </p>
        </div>

        {/* Arrows at bottom */}
        <div className="absolute bottom-6 flex flex-col items-center gap-2">
          <span className="animate-pulse-slow text-white text-xl">∨</span>
          <span className="animate-pulse-med text-white text-2xl">∨</span>
          <span className="animate-pulse-fast text-white text-3xl">∨</span>
        </div>
      </main>

      {/* SERVICES MOSAIC (unchanged) */}
      <section id="servizi" className="relative isolate bg-white text-neutral-900">
        <div className="absolute -top-6 left-0 right-0 mx-auto h-6 w-2/3 bg-[#d3bda6]/60 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          {/* ...your services grid remains untouched... */}
        </div>
      </section>

      {/* PARALLAX STORY */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/story.png')" }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <a
          href="/chi-siamo"
          className="relative z-10 select-none bg-white px-8 py-4 text-sm md:text-base font-semibold uppercase tracking-[0.12em] text-black shadow-xl hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/70"
        >
          la nostra storia
        </a>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="bg-white text-black py-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Form */}
          <div className="bg-white shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-6">Contattaci</h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Cognome"
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                placeholder="Richiesta"
                rows={4}
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 font-semibold uppercase tracking-wide hover:bg-neutral-800 transition"
              >
                Invia
              </button>
            </form>
          </div>

          {/* Right side placeholder (empty for now, could be image/map later) */}
          <div className="hidden md:block h-full w-full bg-neutral-100"></div>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes cta-pop {
          0% { transform: scale(0.85); opacity: 0; }
          60% { transform: scale(1.04); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-cta-pop { animation: cta-pop 600ms cubic-bezier(.2,.9,.2,1) both; }

        @keyframes caret-blink {
          0%,49% { opacity: 1; }
          50%,100% { opacity: 0; }
        }
        .animate-caret { animation: caret-blink 1s steps(1, end) infinite; }

        @keyframes pulse-slow { 0%,100% {opacity:0.4} 50% {opacity:1} }
        @keyframes pulse-med { 0%,100% {opacity:0.2} 50% {opacity:1} }
        @keyframes pulse-fast { 0%,100% {opacity:0.1} 50% {opacity:1} }
        .animate-pulse-slow { animation: pulse-slow 2s infinite; }
        .animate-pulse-med { animation: pulse-med 1.5s infinite; }
        .animate-pulse-fast { animation: pulse-fast 1s infinite; }
      `}</style>
    </div>
  );
}