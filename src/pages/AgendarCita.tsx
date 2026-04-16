import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { MapPin, ExternalLink, ScanLine, MonitorSmartphone, Syringe, ChevronDown } from 'lucide-react';
import idiCentro from '@/assets/idi-centro-2.jpg';

const categories = [
  {
    title: 'Diagnóstico por Imágenes e Intervencionismo',
    icon: ScanLine,
    centers: [
      {
        name: 'Instituto de Diagnóstico por Imagen (IDI)',
        address: 'Inés Salcedo 1-99 entre Agustín Cueva y Federico Proaño.',
        city: 'Cuenca, Ecuador',
        image: idiCentro,
        btnLabel: 'Agendar con IDI',
        btnLink: 'https://www.idicuenca.com/contactanos',
        mapLink: 'https://maps.app.goo.gl/FUDW5PsfV6YKwNaB9',
        mapEmbed:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178!2d-79.0092703!3d-2.9026829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd197715d6cba3:0xa6b92a471ca96e2e!2sIDI+-+Instituto+De+Diagn%C3%B3stico+Por+Imagen!5e0!3m2!1ses!2sec',
      },
    ],
  },
  {
    title: 'Diagnóstico por Imágenes',
    icon: MonitorSmartphone,
    centers: [
      {
        name: 'Hospital Humanitario Imagenología',
        btnLabel: 'Agendar con Hospital Humanitario',
        btnLink: 'https://www.hospitalhumanitario.org/centro-de-imagenes/',
        mapLink: 'https://maps.app.goo.gl/gLeiKR83DfmPUdTB9',
        mapEmbed:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985!2d-79.0100!3d-2.9100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd18b0a0b0c0d0%3A0x1a2b3c4d5e6f7080!2sHospital+Humanitario!5e0!3m2!1ses!2sec',
      },
    ],
  },
  {
    title: 'Intervencionismo',
    icon: Syringe,
    centers: [
      {
        name: 'Diagnóstico Radiológico',
        btnLabel: 'Agendar con Diagnóstico Radiológico',
        btnLink: 'https://www.diagnostico-radiologico.com/diagnosticoradiologico',
        mapLink: 'https://maps.app.goo.gl/8U6G7btrqbu1d2kDA',
        mapEmbed:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985!2d-79.0200!3d-2.9200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd1900a0b0c0d0%3A0x2a3b4c5d6e7f8090!2sDiagn%C3%B3stico+Radiol%C3%B3gico!5e0!3m2!1ses!2sec',
      },
      {
        name: 'Clínica Santa Ana Intervencionismo',
        btnLabel: 'Agendar con Clínica Santa Ana',
        btnLink: 'https://clinicasantaana.com.ec/radiodiagnostico/',
        mapLink: 'https://maps.app.goo.gl/iiQWQiD56RRYuQkC6',
        mapEmbed:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985!2d-79.0050!3d-2.8970!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd183e9f8b6bcb%3A0x3e3d2e4f2a1b0c5d!2sCl%C3%ADnica+Santa+Ana!5e0!3m2!1ses!2sec',
      },
    ],
  },
];

export default function AgendarCita() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <main className="min-h-screen bg-ice">
      <Navbar />

      {/* Header */}
      <div className="bg-serene pt-28 pb-12">
        <div className="section-container text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-gold">
            Reserva tu consulta
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Agendar Cita</h1>
          <div className="mx-auto my-4 gold-separator" style={{ width: '6rem' }} />
          <p className="max-w-xl mx-auto text-white/65">
            Selecciona el centro médico de tu preferencia para agendar tu cita.
          </p>
        </div>
      </div>

      {/* Category Buttons + Accordion Content */}
      <div className="bg-warm-white py-16">
        <div className="section-container">
          {/* Button Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isOpen = openIndex === idx;
              return (
                <button
                  key={cat.title}
                  onClick={() => toggle(idx)}
                  className={`group relative flex flex-col items-center gap-4 p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer text-center
                    ${isOpen
                      ? 'border-gold bg-serene shadow-lg shadow-serene/20'
                      : 'border-pastel/30 bg-white hover:border-pastel hover:shadow-md hover:scale-[1.02]'
                    }`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300
                    ${isOpen ? 'bg-gold/20' : 'bg-ice'}`}>
                    <Icon
                      className={`w-7 h-7 transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-pastel'}`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h2 className={`font-serif text-lg font-bold leading-snug transition-colors duration-300
                    ${isOpen ? 'text-white' : 'text-text-primary'}`}>
                    {cat.title}
                  </h2>
                  <ChevronDown
                    className={`w-5 h-5 transition-all duration-300 ${isOpen ? 'text-gold rotate-180' : 'text-text-secondary'}`}
                    strokeWidth={1.5}
                  />
                </button>
              );
            })}
          </div>

          {/* Accordion Content */}
          {categories.map((category, catIdx) => {
            const isOpen = openIndex === catIdx;
            return (
              <div
                key={category.title}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: isOpen ? '2000px' : '0',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="pt-4 pb-8">
                  <div className={`grid grid-cols-1 ${category.centers.length > 1 ? 'md:grid-cols-2' : 'max-w-3xl mx-auto'} gap-6`}>
                    {category.centers.map((center) => (
                      <div
                        key={center.name}
                        className="rounded-2xl overflow-hidden border border-pastel/20 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        {'image' in center && center.image && (
                          <div className="bg-serene p-6 pb-0">
                            <div className="service-card-img aspect-[16/7] rounded-lg overflow-hidden">
                              <img src={center.image} alt={center.name} className="w-full h-full object-cover" loading="lazy" />
                            </div>
                          </div>
                        )}

                        <div className="aspect-video min-h-[250px]">
                          <iframe
                            src={center.mapEmbed}
                            width="100%"
                            height="100%"
                            style={{ border: 0, display: 'block' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Ubicación de ${center.name}`}
                          />
                        </div>

                        <div className="p-6 bg-serene">
                          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-gold">
                            <MapPin className="w-4 h-4" strokeWidth={1.5} />
                            Centro Médico
                          </div>
                          <h3 className="font-serif text-xl font-bold text-white mb-2">
                            {center.name}
                          </h3>
                          {'address' in center && (
                            <>
                              <p className="text-sm mb-1 text-white/70">{(center as any).address}</p>
                              <p className="text-sm mb-4 text-white/70">{(center as any).city}</p>
                            </>
                          )}
                          <div className="flex flex-wrap gap-3 mt-4">
                            <a
                              href={center.btnLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm bg-gold text-text-primary hover:brightness-110 transition-all"
                            >
                              {center.btnLabel}
                            </a>
                            <a
                              href={center.mapLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm border border-white/30 text-white hover:bg-white/10 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                              Cómo llegar
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-serene border-t border-white/8 py-8">
        <div className="section-container text-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Dr. Francisco Faicán. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </main>
  );
}
