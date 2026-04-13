import Navbar from '@/components/Navbar';
import { Scan, Waves, Radio, Image as ImageIcon, Bone, Syringe, Droplets, Stethoscope } from 'lucide-react';

const diagnostico = [
  { icon: Scan, title: 'Tomografía Computada Multicorte (TAC)', desc: 'Incluye angiotomografía para evaluación vascular de alta precisión.' },
  { icon: Waves, title: 'Ecografía General, Doppler y Gineco-obstétrica 3D/4D', desc: 'Estudios no invasivos en tiempo real para órganos internos, mama y seguimiento gestacional.' },
  { icon: Radio, title: 'Resonancia Magnética', desc: 'Imágenes de alto contraste sin radiación para diagnóstico avanzado.' },
  { icon: ImageIcon, title: 'Radiología Digital', desc: 'Radiología convencional de alta resolución con menor exposición.' },
  { icon: Bone, title: 'Mamografía y Densitometría Ósea', desc: 'Detección temprana de patologías mamarias y evaluación de densidad ósea.' },
];

const intervencionismo = [
  { icon: Syringe, title: 'Biopsias Percutáneas', desc: 'Pulmón, hígado, tiroides, mama y hueso — guiadas por imagen.' },
  { icon: Droplets, title: 'Drenajes Percutáneos', desc: 'Drenaje de vía biliar y colecciones guiado por imagen.' },
  { icon: Stethoscope, title: 'Enfermedades Pulmonares Intersticiales', desc: 'Diagnóstico de fibrosis pulmonar y patrones fibrosantes.' },
];

function ServiceCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div
      className="p-6 rounded-xl bg-white transition-all duration-300 cursor-default group"
      style={{ border: '1px solid #e2e8f0' }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = '#C9A84C';
        el.style.boxShadow = '0 4px 20px rgba(201,168,76,0.15)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = '#e2e8f0';
        el.style.boxShadow = 'none';
      }}
    >
      <Icon className="w-6 h-6 mb-4" style={{ color: '#1A4A6B' }} strokeWidth={1.5} />
      <h4 className="font-serif text-lg font-semibold mb-2" style={{ color: '#0D2137' }}>{title}</h4>
      <p className="text-sm leading-relaxed" style={{ color: '#5A6B7A' }}>{desc}</p>
    </div>
  );
}

export default function Servicios() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F4F6F8' }}>
      <Navbar />

      {/* Header — navy */}
      <div style={{ backgroundColor: '#0D2137' }} className="pt-28 pb-16">
        <div className="section-container text-center">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
            style={{ color: '#C9A84C' }}
          >
            Especialidad
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Servicios Médicos</h1>
          <div
            className="mx-auto my-4"
            style={{
              height: '2px',
              width: '6rem',
              background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            }}
          />
          <p className="max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Tecnología avanzada y precisión diagnóstica para el mejor cuidado de su salud.
          </p>
        </div>
      </div>

      {/* Diagnóstico — ice */}
      <div style={{ backgroundColor: '#F4F6F8' }} className="py-20">
        <div className="section-container">
          <h2 className="font-serif text-2xl font-bold mb-2" style={{ color: '#0D2137' }}>
            Estudios de Diagnóstico
          </h2>
          <div style={{ width: '3rem', height: '2px', backgroundColor: '#C9A84C', marginBottom: '2rem' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diagnostico.map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </div>

      {/* Intervencionismo — navy */}
      <div style={{ backgroundColor: '#0D2137' }} className="py-20">
        <div className="section-container">
          <h2 className="font-serif text-2xl font-bold mb-2 text-white">
            Radiología Intervencionista
          </h2>
          <div style={{ width: '3rem', height: '2px', backgroundColor: '#C9A84C', marginBottom: '2rem' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {intervencionismo.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-xl transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = '#1A4A6B';
                  el.style.borderColor = 'rgba(201,168,76,0.4)';
                  el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  el.style.borderColor = 'rgba(255,255,255,0.1)';
                  el.style.boxShadow = 'none';
                }}
              >
                <s.icon className="w-6 h-6 mb-4" style={{ color: '#C9A84C' }} strokeWidth={1.5} />
                <h4 className="font-serif text-lg font-semibold mb-2 text-white">{s.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: '#F4F6F8', borderTop: '1px solid #e2e8f0' }} className="py-8">
        <div className="section-container text-center">
          <p className="text-xs" style={{ color: '#5A6B7A' }}>
            © {new Date().getFullYear()} Dr. Francisco Faicán. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </main>
  );
}
