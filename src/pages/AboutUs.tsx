import React, { useEffect } from 'react';
import { Award, Users, MapPin, Calendar, Heart, Star } from 'lucide-react';

const AboutUs: React.FC = () => {
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
              La Nostra Identità
            </h5>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 text-black">
              CHI SIAMO
            </h1>
            <div className="w-20 h-[2px] bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-primary">
              Una storia di passione, tradizione e innovazione che da oltre 40 anni 
              porta l'eccellenza dell'hairstyling in tutta Italia.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-3xl font-heading font-bold mb-4 text-black">La Nostra Storia</h2>
              <div className="w-16 h-[2px] bg-gold mx-auto"></div>
            </div>
            
            <div className="space-y-8 text-gray-600 font-primary leading-relaxed">
              <div className="fade-in">
                <p className="text-lg">
                  Extro Parrucchieri è una realtà nata dalla passione per l'arte dell'hairstyling e dalla volontà di innovare 
                  restando saldamente ancorata alle proprie radici. La nostra storia affonda le sue origini nel <span className="font-semibold text-gold">1983 a Brindisi</span>, 
                  quando <span className="font-semibold text-black">Fernando Tarantini</span> fonda il primo salone, gettando le basi di una tradizione 
                  che da allora non ha mai smesso di evolversi.
                </p>
              </div>
              
              <div className="fade-in">
                <p className="text-lg">
                  Nel corso degli anni, il marchio Extro Parrucchieri ha saputo crescere e consolidarsi in diverse città italiane, 
                  portando avanti con orgoglio una storia fatta di esperienza, creatività e attenzione al cliente. 
                  A <span className="font-semibold text-gold">Milano, con oltre 25 anni di attività</span>, ci distinguiamo per la capacità di innovare costantemente, 
                  anticipando le tendenze e valorizzando l'unicità di ogni persona che attraversa le nostre porte.
                </p>
              </div>
              
              <div className="fade-in">
                <p className="text-lg">
                  A Mori, vicino a Rovereto, la sede "Extrò Parrucchieri By Salvi" rappresenta un punto di riferimento per chi cerca 
                  non solo professionalità, ma anche un percorso stilistico personalizzato e attento al dettaglio, 
                  frutto della visione del fondatore <span className="font-semibold text-black">Salvatore Sessa</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-heading font-bold mb-4 text-black">I Nostri Valori</h2>
            <div className="w-16 h-[2px] bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto font-primary">
              L'identità di Extro Parrucchieri si fonda su valori comuni che guidano ogni nostro gesto professionale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-in text-center p-8 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-gold transition-all">
              <Heart className="text-gold mx-auto mb-4" size={48} />
              <h3 className="text-xl font-heading font-semibold mb-3 text-black">Creatività</h3>
              <p className="text-gray-600 font-primary">
                L'arte dell'hairstyling come espressione di creatività e innovazione, 
                per valorizzare l'unicità di ogni cliente.
              </p>
            </div>
            
            <div className="fade-in text-center p-8 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-gold transition-all">
              <Award className="text-gold mx-auto mb-4" size={48} />
              <h3 className="text-xl font-heading font-semibold mb-3 text-black">Leadership Artistica</h3>
              <p className="text-gray-600 font-primary">
                Anticipiamo le tendenze e definiamo nuovi standard di eccellenza 
                nel mondo dell'hairstyling professionale.
              </p>
            </div>
            
            <div className="fade-in text-center p-8 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-gold transition-all">
              <Star className="text-gold mx-auto mb-4" size={48} />
              <h3 className="text-xl font-heading font-semibold mb-3 text-black">Ricerca dell'Eccellenza</h3>
              <p className="text-gray-600 font-primary">
                La continua ricerca della perfezione in ogni dettaglio, 
                per offrire un'esperienza unica e autentica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-heading font-bold mb-4 text-black">La Nostra Timeline</h2>
            <div className="w-16 h-[2px] bg-gold mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="fade-in flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <Calendar className="text-black" size={24} />
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-heading font-semibold text-black mb-2">1983 - Le Origini</h3>
                  <p className="text-gray-600 font-primary">
                    Fernando Tarantini fonda il primo salone Extro Parrucchieri a Brindisi, 
                    gettando le basi di una tradizione che continua ancora oggi.
                  </p>
                </div>
              </div>
              
              <div className="fade-in flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <MapPin className="text-black" size={24} />
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-heading font-semibold text-black mb-2">Espansione Nazionale</h3>
                  <p className="text-gray-600 font-primary">
                    Il marchio cresce e si consolida in diverse città italiane, 
                    portando l'eccellenza dell'hairstyling in tutta la penisola.
                  </p>
                </div>
              </div>
              
              <div className="fade-in flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <Users className="text-black" size={24} />
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-heading font-semibold text-black mb-2">Milano - 25+ Anni</h3>
                  <p className="text-gray-600 font-primary">
                    Con oltre 25 anni di attività a Milano, ci distinguiamo per innovazione costante 
                    e valorizzazione dell'unicità di ogni cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-heading font-bold mb-4 text-black">Le Nostre Figure Guida</h2>
            <div className="w-16 h-[2px] bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto font-primary">
              Grazie alla visione e all'esperienza dei nostri fondatori, Extro Parrucchieri 
              è diventato un punto di riferimento nel settore dell'hairstyling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="fade-in text-center p-8 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-gold transition-all">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3 text-black">Fernando Tarantini</h3>
              <p className="text-gold font-primary font-medium mb-3">Fondatore - 1983</p>
              <p className="text-gray-600 font-primary">
                Visionario e pioniere, ha gettato le basi di quella che sarebbe diventata 
                una delle realtà più importanti dell'hairstyling italiano.
              </p>
            </div>
            
            <div className="fade-in text-center p-8 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-gold transition-all">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3 text-black">Salvatore Sessa</h3>
              <p className="text-gold font-primary font-medium mb-3">Fondatore Sede Mori</p>
              <p className="text-gray-600 font-primary">
                La sua visione ha dato vita a "Extrò Parrucchieri By Salvi", 
                un punto di riferimento per l'eccellenza stilistica personalizzata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-heading font-bold mb-6 text-black">
                Tradizione e Innovazione
              </h2>
              <div className="w-16 h-[2px] bg-gold mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 font-primary leading-relaxed">
                La nostra storia è dunque un racconto di <span className="font-semibold text-black">tradizione e innovazione</span>, 
                che unisce la solidità di oltre quarant'anni di esperienza a una visione sempre proiettata verso il futuro, 
                per offrire un'esperienza unica e autentica, fatta su misura per ogni cliente.
              </p>
              <p className="text-lg text-gray-600 font-primary leading-relaxed mt-4">
                Il nostro marchio non è solo un'istituzione di bellezza, ma anche un punto di riferimento per professionisti e clienti, 
                capace di legarsi profondamente al territorio e alle sue bellezze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="max-w-2xl mx-auto fade-in">
            <h2 className="text-4xl font-heading font-bold mb-6 text-white">
              Scopri la Differenza Extro
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-primary">
              Vieni a conoscere la nostra storia di persona. Prenota il tuo appuntamento 
              e scopri perché da oltre 40 anni siamo sinonimo di eccellenza nell'hairstyling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/prenota/servizio" className="btn btn-primary text-lg px-8 py-3">PRENOTA ORA</a>
              <a href="tel:0248006574" className="btn btn-outline text-lg px-8 py-3">CHIAMA ORA</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;