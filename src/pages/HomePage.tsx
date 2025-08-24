import Navbar from "../components/Navbar";
import Footer from ../components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Landing: single full-bleed image with centered CTA */}
      <main
        className="relative flex h-[92vh] w-full items-center justify-center overflow-hidden md:h-[94vh]"
        aria-label="EXTRO Parrucchieri landing hero"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-[url('/assets/saloon.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        {/* Readability overlay (very subtle) */}
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

        {/* Center CTA: sharp rectangle, no rounded corners */}
        <a
          href="#booking"
          className="relative z-10 select-none px-8 py-4 text-base font-semibold uppercase tracking-[0.12em] text-black bg-white shadow-xl hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/70"
        >
          PRENOTA ORA
        </a>
      </main>

      {/* Tagline below hero */}
      <section className="bg-white py-10 text-center text-neutral-900">
        <p className="mx-auto max-w-4xl px-6 text-xl italic md:text-2xl">
          Un'esperienza trentennale
        </p>
      </section>

      <Footer />
    </div>
  );
}
