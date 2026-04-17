import Navbar from '@/components/Navbar';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import idiImg from '@/assets/agendar-idi.png';
import humanitarioImg from '@/assets/agendar-humanitario.png';
import santaAnaImg from '@/assets/agendar-santa-ana.jpg';
import diradImg from '@/assets/agendar-dirad.jpg';

type BtnIcon = 'whatsapp' | 'phone' | 'maps';

function ActionButton({ href, label, icon }: { href: string; label: string; icon: BtnIcon }) {
  const Icon = icon === 'maps' ? MapPin : icon === 'phone' ? Phone : MessageCircle;
  return (
    <a
      href={href}
      target={href.startsWith('tel:') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-pastel/40 bg-white text-text-primary hover:border-gold hover:bg-gold/5 hover:text-gold transition-all duration-200"
    >
      <Icon className="w-4 h-4" strokeWidth={1.5} />
      {label}
    </a>
  );
}

export default function AgendarCita() {
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

      {/* Cards */}
      <div className="bg-warm-white py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* CARD 1 — IDI */}
            <div
              className="rounded-xl overflow-hidden bg-white border border-pastel/20 hover:border-gold hover:shadow-lg transition-all duration-300 group flex flex-col"
              style={{ boxShadow: '0 4px 16px rgba(44,95,138,0.06)' }}
            >
              <div className="service-card-img aspect-[16/10] overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={idiImg}
                  alt="IDI - Instituto de Diagnóstico por Imagen"
                  className="w-full h-full object-contain p-6 transition-transform duration-[400ms] group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-lg font-bold text-text-primary mb-1">
                  Agendar para Diagnóstico por Imágenes e Intervencionismo
                </h3>
                <p className="text-sm text-text-secondary mb-5">
                  Agendamiento IDI (Instituto de Diagnóstico por Imagen)
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <ActionButton href="https://wa.me/593999957686" label="Agendar - Teléfono" icon="whatsapp" />
                  <ActionButton href="https://wa.me/593995103478" label="Agendar - Teléfono 2" icon="whatsapp" />
                  <ActionButton href="https://maps.app.goo.gl/b9grxFeoRDdoUeN76" label="Ubicación" icon="maps" />
                </div>
              </div>
            </div>

            {/* CARD 2 — Hospital Humanitario */}
            <div
              className="rounded-xl overflow-hidden bg-white border border-pastel/20 hover:border-gold hover:shadow-lg transition-all duration-300 group flex flex-col"
              style={{ boxShadow: '0 4px 16px rgba(44,95,138,0.06)' }}
            >
              <div className="service-card-img aspect-[16/10] overflow-hidden bg-serene flex items-center justify-center">
                <img
                  src={humanitarioImg}
                  alt="Hospital Humanitario"
                  className="w-full h-full object-contain p-6 transition-transform duration-[400ms] group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-lg font-bold text-text-primary mb-1">
                  Agendamiento para Diagnóstico por Imágenes
                </h3>
                <p className="text-sm text-text-secondary mb-5">
                  Agendar con Hospital Humanitario
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <ActionButton href="https://wa.me/593999611110" label="Agendar - Teléfono" icon="whatsapp" />
                  <ActionButton href="tel:024001700" label="Call Center" icon="phone" />
                  <ActionButton href="https://maps.app.goo.gl/fD5MaT4LV8w9ie7x7" label="Ubicación" icon="maps" />
                </div>
              </div>
            </div>

            {/* CARD 3 — Intervencionismo (full width on desktop) */}
            <div
              className="md:col-span-2 rounded-xl overflow-hidden bg-white border border-pastel/20 hover:border-gold hover:shadow-lg transition-all duration-300 group flex flex-col"
              style={{ boxShadow: '0 4px 16px rgba(44,95,138,0.06)' }}
            >
              {/* Split image */}
              <div className="grid grid-cols-2 aspect-[16/6] overflow-hidden">
                <div className="service-card-img overflow-hidden bg-white flex items-center justify-center border-r border-pastel/20">
                  <img
                    src={santaAnaImg}
                    alt="Clínica Santa Ana"
                    className="w-full h-full object-contain p-4 transition-transform duration-[400ms] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="service-card-img overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={diradImg}
                    alt="Diagnóstico Radiológico DIRAD"
                    className="w-full h-full object-contain p-4 transition-transform duration-[400ms] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-text-primary mb-5 text-center">
                  Agendar para Intervencionismo
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Santa Ana */}
                  <div className="flex flex-col items-center text-center sm:border-r sm:border-pastel/20 sm:pr-6">
                    <h4 className="font-serif text-base font-semibold text-text-primary mb-3">
                      Clínica Santa Ana
                    </h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      <ActionButton href="https://wa.me/593969843704" label="Agendar - Teléfono" icon="whatsapp" />
                      <ActionButton href="https://maps.app.goo.gl/GdsJqNCqop1forss8" label="Ubicación" icon="maps" />
                    </div>
                  </div>

                  {/* DIRAD */}
                  <div className="flex flex-col items-center text-center">
                    <h4 className="font-serif text-base font-semibold text-text-primary mb-3">
                      Diagnóstico Radiológico
                    </h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      <ActionButton href="https://wa.me/593998192609" label="Agendar - Teléfono" icon="whatsapp" />
                      <ActionButton href="https://maps.app.goo.gl/4vFrbDXy8yawLE8Q6" label="Ubicación" icon="maps" />
                    </div>
                  </div>
                </div>
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
