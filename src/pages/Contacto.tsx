import Navbar from '@/components/Navbar';
import { Instagram, MapPin, ExternalLink, Facebook } from 'lucide-react';
import idiCentro from '@/assets/idi-centro-2.jpg';

const centers = [
  {
    name: 'Clínica Santa Ana Intervencionismo',
    btnLabel: 'Agendar con Clínica Santa Ana',
    btnLink: 'https://clinicasantaana.com.ec/radiodiagnostico/',
    mapLink: 'https://maps.app.goo.gl/iiQWQiD56RRYuQkC6',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985!2d-79.0050!3d-2.8970!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd183e9f8b6bcb%3A0x3e3d2e4f2a1b0c5d!2sCl%C3%ADnica+Santa+Ana!5e0!3m2!1ses!2sec',
  },
  {
    name: 'Hospital Humanitario Imagenología',
    btnLabel: 'Agendar con Hospital Humanitario',
    btnLink: 'https://www.hospitalhumanitario.org/centro-de-imagenes/',
    mapLink: 'https://maps.app.goo.gl/gLeiKR83DfmPUdTB9',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985!2d-79.0100!3d-2.9100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd18b0a0b0c0d0%3A0x1a2b3c4d5e6f7080!2sHospital+Humanitario!5e0!3m2!1ses!2sec',
  },
  {
    name: 'Diagnóstico Radiológico',
    btnLabel: 'Agendar con Diagnóstico Radiológico',
    btnLink: 'https://www.diagnostico-radiologico.com/diagnosticoradiologico',
    mapLink: 'https://maps.app.goo.gl/8U6G7btrqbu1d2kDA',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985!2d-79.0200!3d-2.9200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd1900a0b0c0d0%3A0x2a3b4c5d6e7f8090!2sDiagn%C3%B3stico+Radiol%C3%B3gico!5e0!3m2!1ses!2sec',
  },
];

export default function Contacto() {
  return (
    <main className="min-h-screen bg-ice">
      <Navbar />

      {/* Header */}
      <div className="bg-serene pt-28 pb-12">
        <div className="section-container text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-gold">
            Contacto
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Contáctame</h1>
          <div className="mx-auto my-4 gold-separator" style={{ width: '6rem' }} />
          <p className="max-w-xl mx-auto text-white/65">
            Estoy a su disposición para consultas, citas y coordinación de estudios de imagen.
          </p>
        </div>
      </div>

      {/* IDI Section */}
      <div className="bg-warm-white py-16">
        <div className="section-container">
          <div className="rounded-2xl overflow-hidden border border-pastel/20 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10 flex flex-col justify-center bg-serene">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-gold">
                  <MapPin className="w-4 h-4" strokeWidth={1.5} />
                  Centro de Imagen
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                  Instituto de Diagnóstico por Imagen (IDI)
                </h3>
                <p className="text-sm mb-2 text-white/70">
                  Inés Salcedo 1-99 entre Agustín Cueva y Federico Proaño.
                </p>
                <p className="text-sm mb-6 text-white/70">Cuenca, Ecuador</p>

                {/* IDI image */}
                <div className="service-card-img aspect-[16/7] rounded-lg overflow-hidden mb-6">
                  <img src={idiCentro} alt="Instituto de Diagnóstico por Imagen" className="w-full h-full object-cover" loading="lazy" />
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.idicuenca.com/contactanos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm bg-gold text-text-primary hover:brightness-110 transition-all"
                  >
                    Agendar con IDI
                  </a>
                  <a
                    href="https://maps.app.goo.gl/FUDW5PsfV6YKwNaB9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm border border-white/30 text-white hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                    Cómo llegar
                  </a>
                </div>
              </div>
              <div className="aspect-video md:aspect-auto min-h-[280px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178!2d-79.0092703!3d-2.9026829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd197715d6cba3:0xa6b92a471ca96e2e!2sIDI+-+Instituto+De+Diagn%C3%B3stico+Por+Imagen!5e0!3m2!1ses!2sec"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del IDI"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other medical centers gallery */}
      <div className="bg-ice py-16">
        <div className="section-container">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-gold text-center">
            Centros Médicos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary text-center mb-4">
            Otros Centros donde atiendo
          </h2>
          <div className="mx-auto my-4 gold-separator" style={{ width: '5rem' }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {centers.map((center) => (
              <div
                key={center.name}
                className="rounded-2xl overflow-hidden border border-pastel/20 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Map */}
                <div className="aspect-video min-h-[200px]">
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
                {/* Info */}
                <div className="p-6 bg-serene">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-gold">
                    <MapPin className="w-4 h-4" strokeWidth={1.5} />
                    Centro Médico
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-4">
                    {center.name}
                  </h3>
                  <div className="flex flex-wrap gap-3">
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

      {/* Address */}
      <div className="bg-warm-white py-6">
        <div className="section-container">
          <div className="flex items-start gap-3 px-2">
            <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-medium text-text-primary">Cuenca, Ecuador</p>
              <p className="text-sm text-text-secondary">
                Inés Salcedo 1-99 entre Agustín Cueva y Federico Proaño
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="section-container py-4">
        <div className="gold-separator" />
      </div>

      {/* Contact options — serene */}
      <div className="bg-serene py-12 pb-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dr.ffaican?igsh=NjBqdndwZzdpZ3dz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold/35 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 border border-gold/30 bg-gold/10">
                <Instagram className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Instagram</p>
                <p className="text-sm text-white/55">@dr.ffaican</p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/drffaican/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold/35 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 border border-gold/30 bg-gold/10">
                <Facebook className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Facebook</p>
                <p className="text-sm text-white/55">Dr. Francisco Faicán</p>
              </div>
            </a>

            {/* Agendar Cita */}
            <a
              href="https://linktr.ee/drffaican"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-5 rounded-xl font-bold text-base bg-gold text-text-primary hover:brightness-110 transition-all"
            >
              Agendar Cita
            </a>
          </div>

          {/* Google Maps button */}
          <div className="mt-6 text-center">
            <a
              href="https://maps.app.goo.gl/kMQmnuYcqap6ZkNf6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
              Ver en Google Maps
            </a>
          </div>
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
