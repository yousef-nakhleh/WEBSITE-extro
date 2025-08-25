import React, { useEffect, useRef } from 'react';
import { ArrowRight, MapPin, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useVapi } from '../context/VapiContext'; // ✅ IMPORTED

const HomePage: React.FC = () => {
  const { startCall, stopCall, isConnected } = useVapi(); // ✅ USE VAPI HOOK

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ================================
  // 🔶 SCROLL DEPTH 50% — DEFINITION (HIGHLIGHT)
  // This useEffect detects when the user reaches 50% scroll depth on the homepage
  // and fires a CustomEvent `VF_SCROLL_50_HOME` once per page view.
  // We'll wire this to the Voiceflow SDK in the next step.
  // ================================
  const firedScroll50Ref = useRef(false);

  useEffect(() => {
    const computeScrollPct = () => {
      const doc = document.documentElement;
      const totalScrollable = doc.scrollHeight - window.innerHeight;
      if (totalScrollable <= 0) return 100; // very short pages count as fully visible
      return Math.round((window.scrollY / totalScrollable) * 100);
    };

    const onScrollDepthCheck = () => {
      if (firedScroll50Ref.current) return;
      const pct = computeScrollPct();
      if (pct >= 50) {
        firedScroll50Ref.current = true;
        // Fire a page-level event we can hook later to the SDK
        const detail = { scrollDepth: pct, path: window.location.pathname, page: 'home' };
        window.dispatchEvent(new CustomEvent('VF_SCROLL_50_HOME', { detail }));
        // (Optional) for quick visibility during testing:
        // console.log('[VF] Scroll 50% reached on home:', detail);
      }
    };

    // throttle with rAF
    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(onScrollDepthCheck);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // check immediately on mount in case user lands mid-page
    onScrollDepthCheck();

    return () => {
      window.removeEventListener('scroll', onScroll as any);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
  // 🔶 END SCROLL DEPTH 50% — DEFINITION
  // ================================

  return (
    <main className="pt-[88px]">
      {/* Hero Section - UNCHANGED */}
      <section className="min-h-[calc(100vh-88px)] relative flex items-center">
        <div className="absolute inset-0 bg-black">
          <div 
            className="absolute inset-0 bg-center bg-cover opacity-80"
            style={{ backgroundImage: "url('/assets/background2.png')" }} 
          ></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold mb-4 fade-in" style={{ '--delay': '100ms' } as React.CSSProperties}>
              EXTRO<br />
              <span className="text-gold">PARRUCCHIERI MILANO</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl fade-in" style={{ '--delay': '200ms' } as React.CSSProperties}>
              Diamo forma alle emozioni. Il nostro team ti offre un'esperienza unica con i migliori prodotti e le tecniche più avanzate.
            </p>
            <div className="flex items-center gap-6 mb-8 fade-in" style={{ '--delay': '250ms' } as React.CSSProperties}>
              <div className="flex items-center gap-2 text-gold">
                <MapPin size={18} />
                <span className="text-sm">Corso Magenta, 79, 20123 Milano MI</span>
              </div>
              <div className="flex items-center gap-2 text-gold">
                <Clock size={18} />
                <span className="text-sm">4m a piedi dalla fermata di Conciliazione</span>
              </div>
            </div>
            <div className="w-20 h-[1px] bg-gold mb-8"></div>
            <div className="flex flex-wrap gap-4 fade-in" style={{ '--delay': '300ms' } as React.CSSProperties}>
              <Link to="/prenota/servizio" className="btn btn-primary">PRENOTA ORA</Link>
              <Link to="/servizi" className="btn btn-outline">SCOPRI I SERVIZI</Link>
              <button
                onClick={isConnected ? stopCall : startCall}
                className="btn btn-outline"
              >
                {isConnected ? 'TERMINA CHIAMATA' : 'PARLA CON NOI'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - UPDATED TO WHITE */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 fade-in">
            <h5 className="text-gray-600 tracking-widest uppercase mb-2 font-primary">
              Servizi Specializzati
            </h5>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-black">
              I NOSTRI SERVIZI
            </h2>
            <div className="w-20 h-[2px] bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-primary">
              Servizi per capelli a tutto tondo: tagli, pieghe, colore e trattamenti specializzati per la chioma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Acconciature',
                
                image: '/assets/capelli.png'
              },
              {
                title: 'Beauty',
                
                image: '/assets/beauty.png'
              },
              {
                title: 'Servizio sposa',
                
                image: '/assets/sposa.png'
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group bg-white border-2 border-gray-200 overflow-hidden shadow-md hover:shadow-lg hover:border-gold transition-all duration-300 fade-in"
                style={{ '--delay': `${index * 100}ms` } as React.CSSProperties}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-3 text-black group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-primary text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to="/servizi" 
                    className="flex items-center text-gold hover:text-black transition-colors group/link"
                  >
                    <span className="mr-2 font-primary font-medium">Scopri di più</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extension Section - NEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 fade-in">
            <h5 className="text-gray-600 tracking-widest uppercase mb-2 font-primary">
              Servizi Specializzati
            </h5>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-black">
              EXTENSION
            </h2>
            <div className="w-20 h-[2px] bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-primary">
              Trasforma il tuo look con le nostre extension professionali. Utilizziamo il sistema innovativo 
              Nano Hairdreams per risultati naturali e duraturi che valorizzano la tua bellezza.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { image: '/assets/extention1.png', alt: 'Extension naturali - Prima' },
              { image: '/assets/extention2.png', alt: 'Extension naturali - Dopo' },
              { image: '/assets/extention3.png', alt: 'Applicazione extension professionale' },
              { image: '/assets/extention4.png', alt: 'Risultato finale extension' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 fade-in"
                style={{ '--delay': `${index * 100}ms` } as React.CSSProperties}
              >
                <img 
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center mb-8 fade-in">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-black">
              CHI SIAMO: una storia trentennale
            </h2>
            <div className="w-20 h-[2px] bg-gold mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Scrolling About Image Section */}
      <section 
        className="relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: "url('/assets/aboutus.png')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center fade-in">
            <Link 
              to="/chi-siamo" 
              className="bg-gold text-black px-8 py-4 font-heading font-bold text-xl transition-all duration-300 hover:bg-opacity-90 shadow-lg hover:shadow-xl inline-block"
            >
              SCOPRI DI PIÙ
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview - UPDATED TO WHITE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 fade-in">
            <h5 className="text-gray-600 tracking-widest uppercase mb-2 font-primary">
              Il Nostro Lavoro
            </h5>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-black">
              GALLERIA
            </h2>
            <div className="w-20 h-[2px] bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-in">
            <div className="col-span-2 row-span-2">
              <img 
                src="/assets/photo1.png" 
                alt="Feiver Parrucchieri - Lavoro professionale" 
                className="w-full h-full object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
            <div>
              <img 
                src="/assets/photo2.png" 
                alt="Cliente soddisfatto" 
                className="w-full h-full object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
            <div>
              <img 
                src="/assets/photo3.png" 
                alt="Taglio moderno" 
                className="w-full h-full object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
            <div>
              <img 
                src="/assets/photo4.png" 
                alt="Dettaglio colorazione" 
                className="w-full h-full object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
            <div>
              <img 
                src="/assets/photo5.png" 
                alt="Ambiente del salone" 
                className="w-full h-full object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-12 fade-in">
            <Link to="/galleria" className="bg-gold text-black px-8 py-3 font-heading font-bold text-lg transition-all duration-300 hover:bg-opacity-90 shadow-lg hover:shadow-xl inline-block">
              SFOGLIA LA GALLERIA
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - UNCHANGED (keeps the black background with image overlay) */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-black">
          <div 
            className="absolute inset-0 bg-center bg-cover opacity-30"
            style={{ backgroundImage: "url('/assets/photo6.png')" }}
          ></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto fade-in">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">Prenota Il Tuo Appuntamento</h2>
            <p className="text-lg text-gray-300 mb-8">
              Affidati all'esperienza del nostro team. Prenota ora per un'esperienza di bellezza unica nel cuore di Milano.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/prenota/servizio" className="btn btn-primary text-lg px-8 py-3">PRENOTA ORA</Link>
              <a href="tel:0297383541" className="btn btn-outline text-lg px-8 py-3">CHIAMA ORA</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;