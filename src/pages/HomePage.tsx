import Navbar from "../components/Navbar";

const YT_ID = "Hf6abfL1la4";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />

      <main
        className="relative flex h-screen w-full items-center justify-center overflow-hidden"
        aria-label="EXTRO Parrucchieri landing hero"
      >
        {/* Background video (YouTube) */}
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
          {/* Light overlay for contrast */}
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <a
            href="#booking"
            className="select-none bg-white px-8 py-4 text-sm md:text-base font-semibold uppercase tracking-[0.12em] text-black shadow-xl hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/70 animate-cta-pop"
          >
            PRENOTA ORA
          </a>

          <p
            className="mt-4 text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] text-lg md:text-xl italic"
            style={{
              fontFamily:
                "ui-script, 'Brush Script MT', 'Lucida Handwriting', cursive",
            }}
          >
            Un&apos;esperienza trentennale
          </p>
        </div>
      </main>

      {/* Local animation for a gentle scale-in of the CTA */}
      <style>{`
        @keyframes cta-pop {
          0%   { transform: scale(0.85); opacity: 0; }
          60%  { transform: scale(1.04); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-cta-pop { animation: cta-pop 600ms cubic-bezier(.2,.9,.2,1) both; }
      `}</style>
    </div>
  );
}