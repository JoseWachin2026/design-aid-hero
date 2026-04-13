import { ArrowRight, User, Stethoscope, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import hover1 from '@/assets/hover-1.png';
import hover2 from '@/assets/hover-2.png';

const stats = [
  { value: '20+', label: 'años de experiencia' },
  { value: '4', label: 'afiliaciones internacionales' },
  { value: '10+', label: 'congresos internacionales' },
  { value: '2', label: 'hospitales actuales' },
];

const quickCards = [
  {
    icon: User,
    title: 'Conoce mi Perfil',
    desc: 'Formación, trayectoria y especialidades',
    to: '/perfil',
  },
  {
    icon: Stethoscope,
    title: 'Mis Servicios',
    desc: 'Diagnóstico e intervencionismo',
    to: '/servicios',
  },
  {
    icon: MessageCircle,
    title: 'Contáctame',
    desc: 'Agenda tu cita o consulta',
    to: '/contacto',
  },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col">
      <div
        className="relative min-h-screen flex items-center pt-20"
        style={{ background: 'linear-gradient(135deg, #0D2137 0%, #1A4A6B 100%)' }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: '#C9A84C' }}
            >
              Especialista en Diagnóstico por Imagen
            </p>

            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Dr. Francisco<br />Faicán
            </h1>

            <p className="text-base md:text-lg mb-3 font-medium" style={{ color: '#C9A84C' }}>
              Médico Radiólogo · Imagenología
            </p>

            <p
              className="text-sm md:text-base mb-8 max-w-md leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.72)' }}
            >
              Diagnósticos confiables y precisos con tecnología de vanguardia en Cuenca, Ecuador.
            </p>

            <a
              href="https://linktr.ee/drffaican"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#C9A84C', color: '#0D2137' }}
            >
              Agendar Cita
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>

          <div className="relative w-full aspect-[3/4] max-w-sm mx-auto lg:ml-auto">
            <div
              className="relative w-full h-full rounded-2xl overflow-hidden group"
              style={{
                border: '1px solid rgba(201,168,76,0.35)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
              }}
            >
              <img
                src={hover1}
                alt="Dr. Francisco Faicán"
                className="absolute inset-0 w-full h-full object-cover object-[center_15%] transition-opacity duration-700 group-hover:opacity-0"
              />
              <img
                src={hover2}
                alt="Dr. Francisco Faicán — Conferencia"
                className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ backgroundColor: '#0D2137', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center py-4 relative">
                {i < stats.length - 1 && (
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px hidden md:block"
                    style={{ backgroundColor: '#C9A84C', opacity: 0.45 }}
                  />
                )}
                <span className="font-serif text-3xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-xs tracking-wide uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick access cards */}
      <div style={{ backgroundColor: '#0D2137', borderTop: '1px solid rgba(255,255,255,0.06)', paddingBottom: '3.5rem' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickCards.map((card, i) => (
              <Link
                key={i}
                to={card.to}
                className="group flex flex-col p-6 rounded-xl border transition-all duration-300 cursor-pointer"
                style={{
                  borderColor: 'rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = '#1A4A6B';
                  el.style.borderColor = 'rgba(201,168,76,0.4)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = 'rgba(255,255,255,0.04)';
                  el.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <card.icon
                  className="w-6 h-6 mb-4"
                  style={{ color: '#C9A84C' }}
                  strokeWidth={1.5}
                />
                <h3 className="font-serif font-semibold text-white text-lg mb-1">{card.title}</h3>
                <p className="text-sm mb-5 flex-1" style={{ color: '#5A6B7A' }}>{card.desc}</p>
                <div className="flex items-center gap-1 text-sm font-medium" style={{ color: '#C9A84C' }}>
                  Ver más
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
