import Navbar from '@/components/Navbar';
import { Phone, Instagram, MapPin, ExternalLink } from 'lucide-react';

export default function Contacto() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0D2137' }}>
      <Navbar />

      {/* Page header */}
      <div style={{ backgroundColor: '#0D2137' }} className="pt-28 pb-12">
        <div className="section-container text-center">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
            style={{ color: '#C9A84C' }}
          >
            Contacto
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Contáctame</h1>
          <div
            className="mx-auto my-4"
            style={{
              height: '2px',
              width: '6rem',
              background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            }}
          />
          <p className="max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Estoy a su disposición para consultas, citas y coordinación de estudios de imagen.
          </p>
        </div>
      </div>

      {/* IDI Section */}
      <div style={{ backgroundColor: '#0D2137' }} className="pb-6">
        <div className="section-container">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                className="p-8 md:p-10 flex flex-col justify-center"
                style={{ backgroundColor: '#1A4A6B' }}
              >
                <div
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                  style={{ color: '#C9A84C' }}
                >
                  <MapPin className="w-4 h-4" strokeWidth={1.5} />
                  Centro de Imagen
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                  Instituto de Diagnóstico por Imagen (IDI)
                </h3>
                <p className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Inés Salcedo 1-99 entre Agustín Cueva y Federico Proaño.
                </p>
                <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>Cuenca, Ecuador</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.idicuenca.com/contactanos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#C9A84C', color: '#0D2137' }}
                  >
                    Agendar con IDI
                  </a>
                  <a
                    href="https://maps.app.goo.gl/FUDW5PsfV6YKwNaB9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-colors"
                    style={{
                      border: '1px solid rgba(255,255,255,0.3)',
                      color: 'white',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
                  >
                    <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                    Cómo llegar
                  </a>
                </div>
              </div>
              <div className="aspect-video md:aspect-auto min-h-[280px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.017!2d-79.0057!3d-2.9001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd18355e813c5b%3A0x7c5c18da2c247ab3!2sInstituto+de+Diagn%C3%B3stico+por+Imagen!5e0!3m2!1ses!2sec!4v1700000000000"
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

      {/* Address detail */}
      <div style={{ backgroundColor: '#0D2137' }} className="py-6">
        <div className="section-container">
          <div className="flex items-start gap-3 px-2">
            <MapPin className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#C9A84C' }} strokeWidth={1.5} />
            <div>
              <p className="text-sm font-medium text-white">Cuenca, Ecuador</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Inés Salcedo 1-99 entre Agustín Cueva y Federico Proaño
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="section-container py-4">
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }} />
      </div>

      {/* WhatsApp + Instagram + Agendar */}
      <div style={{ backgroundColor: '#0D2137' }} className="py-12 pb-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">

            {/* WhatsApp */}
            <a
              href="https://wa.me/593998254115"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl transition-all duration-200"
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: 'rgba(255,255,255,0.04)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = '#1A4A6B';
                el.style.borderColor = 'rgba(201,168,76,0.35)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = 'rgba(255,255,255,0.04)';
                el.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)' }}
              >
                <Phone className="w-5 h-5" style={{ color: '#C9A84C' }} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">WhatsApp</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>+593 99 825 4115</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dr.ffaican?igsh=NjBqdndwZzdpZ3dz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl transition-all duration-200"
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: 'rgba(255,255,255,0.04)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = '#1A4A6B';
                el.style.borderColor = 'rgba(201,168,76,0.35)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = 'rgba(255,255,255,0.04)';
                el.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)' }}
              >
                <Instagram className="w-5 h-5" style={{ color: '#C9A84C' }} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Instagram</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>@dr.ffaican</p>
              </div>
            </a>

            {/* Agendar Cita */}
            <a
              href="https://linktr.ee/drffaican"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-5 rounded-xl font-bold text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#C9A84C', color: '#0D2137' }}
            >
              Agendar Cita
            </a>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', backgroundColor: '#0D2137' }} className="py-8">
        <div className="section-container text-center">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} Dr. Francisco Faicán. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </main>
  );
}
