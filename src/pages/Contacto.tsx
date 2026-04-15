import Navbar from '@/components/Navbar';
import { Instagram, Facebook, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

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

      {/* Contact section */}
      <div className="bg-serene py-16 pb-24">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            {/* Social + Agendar */}
            <div className="grid grid-cols-1 gap-4">

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

              {/* Agendar Cita — internal link */}
              <Link
                to="/agendar"
                className="flex items-center justify-center gap-2 px-6 py-5 rounded-xl font-bold text-base bg-gold text-text-primary hover:brightness-110 transition-all"
              >
                Agendar Cita
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </Link>
            </div>

            {/* Address */}
            <div className="mt-10 flex items-start gap-3 p-5 rounded-xl border border-white/10 bg-white/5">
              <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-medium text-white">Cuenca, Ecuador</p>
                <p className="text-sm text-white/55">
                  Inés Salcedo 1-99 entre Agustín Cueva y Federico Proaño
                </p>
              </div>
            </div>
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
