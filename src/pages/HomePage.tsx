import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const YT_ID = "Hf6abfL1la4";
const slideshowImages = [
  "/saloon1.png",
  "/saloon2.png",
  "/saloon3.png",
  "/saloon4.png",
  "/saloon5.png",
];

export default function HomePage() {
  const [tagline, setTagline] = useState("");
  const taglineFull = "Un'esperienza trentennale";

  // typewriter effect for tagline
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTagline(taglineFull.slice(0, i + 1));
      i++;
      if (i >= taglineFull.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // slideshow
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
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

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <a
            href="#booking"
            className="select-none bg-white px-8 py-4 text-sm md:text-base font-semibold uppercase tracking-[0.12em] text-black shadow-xl hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/70 animate-cta-pop"
          >
            PRENOTA ORA
          </a>

          {/* typewriter tagline */}
          <p
            className="mt-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] text-lg md:text-xl italic"
            style={{
              fontFamily:
                "ui-script, 'Brush Script MT', 'Lucida Handwriting', cursive",
            }}
          >
            {tagline}
            <span className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[3px] animate-caret rounded bg-white/90" />
          </p>
        </div>

        {/* Arrows at bottom */}
        <div className="absolute bottom-6 flex flex-col items-center gap-2">
          <span className="animate-pulse-slow text-white text-xl">↓</span>
          <span className="animate-pulse-med text-white text-2xl">↓</span>
          <span className="animate-pulse-fast text-white text-3xl">↓</span>
        </div>
      </main>

      {/* SERVICES MOSAIC (untouched) */}
      <section
        id="servizi"
        className="relative isolate bg-white text-neutral-900"
      >
        <div className="absolute -top-6 left-0 right-0 mx-auto h-6 w-2/3 bg-[#d3bda6]/60 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          {/* ... your existing services grid ... */}
        </div>
      </section>

      {/* PARALLAX STORY */}
      <section
        className="relative flex min-h-[70vh] items-center justify-center overflow-hidden"
        aria-label="La nostra storia"
      >
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

      {/* SLIDESHOW WITH FORM */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background slideshow */}
        {slideshowImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="absolute inset-0 bg-cover bg-center" />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Form */}
        <div className="relative z-10 flex h-full w-full items-center">
          <div className="bg-white/85 p-8 md:p-12 shadow-2xl max-w-md w-full md:ml-16">
            <h3 className="text-xl font-semibold text-black mb-6">
              Contattaci
            </h3>
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
                className="bg-black text-white px-6 py-3 font-semibold uppercase tracking-wide hover:bg-neutral-800"
              >
                Invia
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes cta-pop {
          0% { transform: scale(0.85); opacity: 0; }
          60% { transform: scale(1.04); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-cta-pop {
          animation: cta-pop 600ms cubic-bezier(.2,.9,.2,1) both;
        }
        @keyframes caret-blink {
          0%,49% { opacity: 1; }
          50%,100% { opacity: 0; }
        }
        .animate-caret {
          animation: caret-blink 1s steps(1, end) infinite;
        }
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