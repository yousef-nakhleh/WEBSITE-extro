import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Full viewport hero image with centered CTA */}
      <main
        className="relative flex h-screen w-full items-center justify-center overflow-hidden"
        aria-label="EXTRO Parrucchieri landing hero"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-[url('public//assets/saloon.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        {/* Optional dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

        {/* Centered CTA */}
        <a
          href="#booking"
          className="relative z-10 bg-white px-8 py-4 text-base font-semibold uppercase tracking-[0.12em] text-black shadow-xl hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/70"
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