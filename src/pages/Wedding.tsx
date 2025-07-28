import React, { useEffect } from 'react';
import { Heart, Crown, Sparkles, Clock, Star, Phone } from 'lucide-react';

const Wedding: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          setTimeout(() => {
            el.classList.add('active');
          }, index * 100);
        }
      });

      // Parallax effect for bride image
      const parallaxElement = document.querySelector('.parallax-bride');
      if (parallaxElement) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        (parallaxElement as HTMLElement).style.transform = `translateY(${rate}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="pt-24 bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-10 fade-in">
            <h5 className="text-gold tracking-widest uppercase mb-2 font-primary font-medium">
              Servizi Speciali
            </h5>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 text-black">
              SERVIZIO SPOSA
            </h1>
            <div className="w-20 h-[2px] bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-primary">
              Il giorno più importante della tua vita merita un'attenzione speciale. 
              Affidati alla nostra esperienza per essere radiosa nel tuo giorno perfetto.
            </p>
          </div>
        </div>
      </section>

      {/* Full Width Parallax Bride Image */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="parallax-bride absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/assets/sposa2.png')",
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="fade-in">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="/assets/sposa3.png" 
                  alt="Sposa elegante con acconciatura professionale"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="fade-in space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-4 text-black">
                  Il Tuo Giorno Perfetto
                </h2>
                <div className="w-16 h-[2px] bg-gold mb-6"></div>
                
                <div className="space-y-6 text-gray-600 font-primary leading-relaxed">
                  <p className="text-lg">
                    È il giorno del tuo matrimonio e non sai a chi rivolgerti? 
                    Da Extro Parrucchieri Milano sappiamo quanto sia importante sentirsi perfetta 
                    nel giorno più speciale della tua vita.
                  </p>
                  
                  <p>
                    Il nostro servizio sposa è pensato per offrirti un'esperienza completa e personalizzata, 
                    dove ogni dettaglio viene curato con la massima attenzione. Dal primo consulto fino al 
                    giorno delle nozze, ti accompagniamo in un percorso di bellezza unico e indimenticabile.
                  </p>
                  
                  <p>
                    Utilizziamo solo prodotti di alta qualità e tecniche all'avanguardia per garantire 
                    che la tua acconciatura e il tuo trucco durino per tutta la giornata, 
                    permettendoti di vivere ogni momento senza preoccupazioni.
                  </p>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200 text-center">
                <h3 className="text-xl font-heading font-semibold text-black mb-4">
                  Vuoi saperne di più? Contattaci
                </h3>
                <a 
                  href="tel:0248006574" 
                  className="bg-gold text-black px-6 py-3 rounded-lg font-heading font-bold text-lg transition-all duration-300 hover:bg-opacity-90 shadow-lg hover:shadow-xl inline-block"
                >
                  CHIAMA ORA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-heading font-bold mb-4 text-black">Cosa Include il Servizio</h2>
            <div className="w-16 h-[2px] bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto font-primary">
              Un pacchetto completo per essere perfetta in ogni dettaglio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="text-gold" size={32} />,
                title: 'Consulenza Personalizzata',
                description: 'Incontro preliminare per studiare il look perfetto in base al tuo stile e al tema del matrimonio'
              },
              {
                icon: <Crown className="text-gold" size={32} />,
                title: 'Acconciatura Sposa',
                description: 'Creazione dell\'acconciatura perfetta con tecniche professionali e prodotti di alta qualità'
              },
              {
                icon: <Sparkles className="text-gold" size={32} />,
                title: 'Trucco Professionale',
                description: 'Make-up completo e duraturo, studiato per valorizzare i tuoi lineamenti nelle foto e dal vivo'
              },
              {
                icon: <Clock className="text-gold" size={32} />,
                title: 'Prova Generale',
                description: 'Sessione di prova completa per perfezionare ogni dettaglio prima del grande giorno'
              },
              {
                icon: <Star className="text-gold" size={32} />,
                title: 'Ritocchi Inclusi',
                description: 'Ritocchi durante la giornata per mantenere il look perfetto in ogni momento'
              },
              {
                icon: <Heart className="text-gold" size={32} />,
                title: 'Servizio a Domicilio',
                description: 'Possibilità di servizio presso la tua location per la massima comodità'
              }
            ].map((service, index) => (
              <div key={index} className="fade-in text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-gold transition-all">
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-black">{service.title}</h3>
                <p className="text-gray-600 font-primary leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-heading font-bold mb-4 text-black">Il Nostro Processo</h2>
            <div className="w-16 h-[2px] bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto font-primary">
              Un percorso studiato per accompagnarti verso il tuo giorno perfetto
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Primo Consulto',
                  description: 'Incontriamoci per conoscere i tuoi desideri, il tema del matrimonio e studiare insieme il look ideale'
                },
                {
                  step: '02',
                  title: 'Prova Generale',
                  description: 'Realizziamo una prova completa di acconciatura e trucco, perfezionando ogni dettaglio'
                },
                {
                  step: '03',
                  title: 'Il Grande Giorno',
                  description: 'Nel giorno delle nozze ci occupiamo di tutto, garantendoti un look impeccabile per tutta la giornata'
                }
              ].map((process, index) => (
                <div key={index} className="fade-in flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-black font-heading font-bold text-lg">{process.step}</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-heading font-semibold text-black mb-2">{process.title}</h3>
                    <p className="text-gray-600 font-primary leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-gold fill-current" size={24} />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 font-primary italic leading-relaxed mb-6">
                  "Il team di Extro Parrucchieri ha reso il mio matrimonio ancora più speciale. 
                  Professionalità, attenzione ai dettagli e un risultato che ha superato ogni mia aspettativa. 
                  Mi sono sentita una vera principessa!"
                </blockquote>
                <cite className="text-black font-heading font-semibold">
                  - Sofia M., Sposa 2024
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="max-w-2xl mx-auto fade-in">
            <Crown className="text-gold mx-auto mb-6" size={48} />
            <h2 className="text-4xl font-heading font-bold mb-6 text-white">
              Prenota la Tua Consulenza
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-primary">
              Il tuo matrimonio è unico e merita un'attenzione speciale. 
              Contattaci per una consulenza personalizzata e scopri come possiamo rendere 
              il tuo giorno ancora più magico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0248006574" 
                className="flex items-center justify-center gap-3 bg-gold text-black px-8 py-4 rounded-lg font-heading font-bold text-lg transition-all duration-300 hover:bg-opacity-90 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                CHIAMA ORA
              </a>
              <a 
                href="/prenota/servizio" 
                className="bg-white text-black border-2 border-white px-8 py-4 rounded-lg font-heading font-bold text-lg transition-all duration-300 hover:bg-gray-100"
              >
                PRENOTA CONSULENZA
              </a>
            </div>
            <p className="text-sm text-gray-400 font-primary mt-4">
              Chiamaci al 02 4800 6574 per fissare un appuntamento
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Wedding;