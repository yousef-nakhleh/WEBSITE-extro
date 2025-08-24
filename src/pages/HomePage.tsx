import Navbar from "../components/Navbar";

const YT_ID = "Hf6abfL1la4";

export default function HomePage() {
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
          <iframe
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            // Scale the iframe to always cover the viewport (16:9 math)
            style={{
              width: "max(100vw, 177.78vh)",   // 16/9 = 1.7778 → 177.78vh covers tall viewports
              height: "max(56.25vw, 100vh)",   // 9/16 = 0.5625 → 56.25vw covers wide viewports
              pointerEvents: "none",
            }}
            src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1&mute=1&controls=0&playsinline=1&modestbranding=1&rel=0&loop=1&playlist=${YT_ID}`}
            title="EXTRO Parrucchieri"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
          {/* Optional slight overlay for contrast; lower if it feels too dark */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Centered CTA: sharp rectangle (no rounded corners) */}
        <a
          href="#booking"
          className="z-10 select-none bg-white px-8 py-4 text-base font-semibold uppercase tracking-[0.12em] text-black shadow-xl hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/70"
        >
          PRENOTA ORA
        </a>
      </main>

      {/* Tagline below hero */}
      <section className="bg-white py-10 text-center text-neutral-900">
        <p className="mx-auto max-w-4xl px-6 text-xl italic md:text-2xl">
          Un&apos;esperienza trentennale
        </p>
      </section>
    </div>
  );
}