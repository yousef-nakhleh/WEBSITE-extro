import Navbar from "../components/Navbar";

const YT_ID = "_GSc3uAm8rQ";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Navbar (from your existing component) */}
      <Navbar />

      {/* Full viewport hero with YouTube background */}
      <main
        className="relative flex h-screen w-full items-center justify-center overflow-hidden"
        aria-label="EXTRO Parrucchieri landing hero"
      >
        {/* YouTube background (fills viewport) */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0">
            <iframe
              className="absolute top-0 left-0 h-full w-full"
              // Important: autoplay requires mute; loop needs playlist=VIDEO_ID
              src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1&mute=1&controls=0&playsinline=1&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=${YT_ID}`}
              title="EXTRO Parrucchieri"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              // Prevent the iframe from capturing pointer events so the CTA is clickable
              style={{ pointerEvents: "none" }}
            />
          </div>
          {/* Optional dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/25" />
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