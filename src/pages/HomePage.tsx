import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section
        className="relative flex items-center justify-center overflow-hidden bg-neutral-950 text-white"
        aria-label="Hero: Luxury Hair, Timeless Style"
      >
        <div className="absolute inset-0">
          {/* Replace src with real hero image/video */}
          <img
            src="/images/hero-salon.jpg"
            alt="Elegant interior of EXTRO Parrucchieri luxury salon"
            className="h-[72vh] w-full object-cover opacity-60 md:h-[82vh]"
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 text-center md:py-32">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Luxury Hair. Timeless Style.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-200 md:text-lg">
            Experience Italian excellence in hair design at EXTRO Parrucchieri.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#booking"
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              Book Your Experience
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Discover Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Heritage / Trust */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">A Tradition of Excellence</h2>
            <p className="mt-3 text-neutral-600">
              For decades, EXTRO Parrucchieri has been a symbol of Italian style and elegance. Our
              award‑winning team blends craftsmanship and couture techniques for a truly bespoke
              experience.
            </p>
            <div className="mt-6 flex gap-4">
              <div className="rounded-xl bg-neutral-100 px-4 py-3 text-sm font-medium">35+ Years</div>
              <div className="rounded-xl bg-neutral-100 px-4 py-3 text-sm font-medium">Awarded Stylists</div>
              <div className="rounded-xl bg-neutral-100 px-4 py-3 text-sm font-medium">Premium Products</div>
            </div>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-80">
            <img
              src="/images/founder.jpg"
              alt="Founder and master stylist at EXTRO Parrucchieri"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Preview (conversion) */}
      <section id="services" className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-semibold md:text-3xl">Our Services</h2>
            <a
              href="#booking"
              className="hidden rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 md:inline-block"
            >
              Book Now
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Haircuts", desc: "Precision styling tailored to you.", img: "/images/service-haircut.jpg" },
              { title: "Styling", desc: "Signature blow-dries & updos.", img: "/images/service-styling.jpg" },
              { title: "Color", desc: "Luxury color and blonding services.", img: "/images/service-color.jpg" },
              { title: "Treatments", desc: "Revitalizing, bond-building care.", img: "/images/service-treatment.jpg" },
            ].map((s) => (
              <article key={s.title} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                <div className="h-44 w-full overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
                  <a
                    href="#booking"
                    className="mt-4 inline-block rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-amber-400"
                  >
                    Book Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Experience / Differentiation */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold md:text-3xl">The Luxury Salon Experience</h2>
            <p className="mt-3 text-neutral-600">
              From private consultations to curated product rituals, every moment is designed for
              comfort and confidence. Enjoy complimentary refreshments, tailored after‑care advice,
              and a serene atmosphere.
            </p>
            <ul className="mt-5 grid gap-3 text-sm text-neutral-700 sm:grid-cols-2">
              <li>• Personalized consultations</li>
              <li>• Premium care rituals</li>
              <li>• Bridal & event services</li>
              <li>• Discreet, by-appointment options</li>
            </ul>
          </div>
          <div className="order-1 relative h-64 w-full overflow-hidden rounded-2xl md:order-2 md:h-80">
            <img
              src="/images/lounge.jpg"
              alt="Warm, elegant lounge area inside the salon"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold md:text-3xl">What Our Clients Say</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { quote: "The best salon experience I’ve ever had. True luxury.", name: "Anna R." },
              { quote: "Attention to detail and personalized care are unmatched.", name: "Marco P." },
              { quote: "EXTRO transformed my look—couldn’t be happier.", name: "Chiara L." },
            ].map((t, i) => (
              <figure key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <blockquote className="text-neutral-700">“{t.quote}”</blockquote>
                <figcaption className="mt-3 text-sm font-semibold">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Offer / Lead Magnet */}
      <section id="offers" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-8 rounded-3xl bg-neutral-900 px-6 py-10 text-white md:grid-cols-2 md:px-10">
          <div>
            <h3 className="text-2xl font-semibold">Exclusive Offer</h3>
            <p className="mt-2 text-neutral-200">
              New clients enjoy <span className="font-semibold">20% off</span> their first appointment. Limited availability.
            </p>
          </div>
          <form
            className="flex w-full flex-col gap-3 md:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              // Hook up to your form / CRM / chatbot handoff
              alert("Thanks! We will be in touch shortly.");
            }}
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-full bg-white/10 px-5 py-3 text-white placeholder-neutral-300 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-amber-400"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-amber-400"
            >
              Redeem Offer
            </button>
          </form>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-neutral-50 py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Ready for Your Luxury Experience?</h2>
          <a
            id="booking"
            href="/booking" // replace with booking route or external link
            className="mt-6 inline-block rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-amber-400"
          >
            Reserve Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Chatbot Launcher (placeholder) */}
      <button
        aria-label="Open chat"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-neutral-900 px-5 py-4 text-sm font-semibold text-white shadow-xl transition hover:bg-neutral-800"
        onClick={() => {
          // Replace with your chatbot open command/hook
          alert("Opening chat…");
        }}
      >
        Chat with Us
      </button>
    </div>
  );
}