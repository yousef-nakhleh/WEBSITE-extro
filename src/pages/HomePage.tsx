import Navbar from "../components/Navbar";

const YT_ID = "Hf6abfL1la4";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />

      {/* HERO */}
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

      {/* SERVICES MOSAIC (below the landing) */}
      <section
        id="servizi"
        className="relative isolate bg-white text-neutral-900"
      >
        {/* subtle frame bar to echo the reference style */}
        <div className="absolute -top-6 left-0 right-0 mx-auto h-6 w-2/3 bg-[#d3bda6]/60 pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-5 md:grid-cols-3">
            {/* Column 1 */}
            <div className="grid gap-5">
              {/* Text card: STYLING */}
              <article className="flex flex-col justify-between bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-semibold tracking-wide">STYLING</h3>
                <p className="mt-3 text-sm text-neutral-600">
                  Piega signature, onde morbide e finish couture per ogni
                  occasione. Consulenza personalizzata inclusa.
                </p>
                <a
                  href="#booking"
                  className="mt-4 inline-block text-sm font-semibold underline underline-offset-4 hover:opacity-80"
                >
                  Prenota →
                </a>
              </article>

              {/* Image tile */}
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src="/assets/services/styling.jpg"
                  alt="Styling"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Text card: COLOR */}
              <article className="flex flex-col justify-between bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-semibold tracking-wide">COLOR</h3>
                <p className="mt-3 text-sm text-neutral-600">
                  Colorazioni su misura, balayage e blonding con prodotti di
                  alta gamma e protocolli di protezione del capello.
                </p>
                <a
                  href="#booking"
                  className="mt-4 inline-block text-sm font-semibold underline underline-offset-4 hover:opacity-80"
                >
                  Prenota →
                </a>
              </article>
            </div>

            {/* Column 2 */}
            <div className="grid gap-5">
              {/* Large image */}
              <div className="aspect-square overflow-hidden bg-neutral-100">
                <img
                  src="/assets/services/hero-grid.jpg"
                  alt="EXTRO lookbook"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Text card: SPECIALS */}
              <article className="flex flex-col justify-between bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-semibold tracking-wide">SPECIALS</h3>
                <p className="mt-3 text-sm text-neutral-600">
                  Rituals di trattamento, pacchetti stagionali e servizi
                  esclusivi per eventi e shooting.
                </p>
                <a
                  href="#booking"
                  className="mt-4 inline-block text-sm font-semibold underline underline-offset-4 hover:opacity-80"
                >
                  Prenota →
                </a>
              </article>

              {/* Image tile */}
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src="/assets/services/specials.jpg"
                  alt="Special treatments"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="grid gap-5">
              {/* Text card: HAIRCUT */}
              <article className="flex flex-col justify-between bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-semibold tracking-wide">HAIRCUT</h3>
                <p className="mt-3 text-sm text-neutral-600">
                  Tagli sartoriali costruiti sulle proporzioni del viso e sullo
                  stile personale. Finish incluso.
                </p>
                <a
                  href="#booking"
                  className="mt-4 inline-block text-sm font-semibold underline underline-offset-4 hover:opacity-80"
                >
                  Prenota →
                </a>
              </article>

              {/* Image tile */}
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src="/assets/services/haircut.jpg"
                  alt="Haircut"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Image tile */}
              <div className="aspect-square overflow-hidden bg-neutral-100">
                <img
                  src="/assets/services/color.jpg"
                  alt="Color service"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local animation for the CTA */}
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