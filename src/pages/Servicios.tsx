import Navbar from '@/components/Navbar';
import { Scan, Waves, Radio, Image as ImageIcon, Bone, Syringe, Droplets, Stethoscope } from 'lucide-react';
import tomografia from '@/assets/tomografia.jpg';
import ecografia from '@/assets/ecografia.jpg';
import resonancia from '@/assets/resonancia-magnetica.jpg';
import radiologia from '@/assets/equipo-radiologico.jpg';
import mamografia from '@/assets/mamografia.jpg';
import biopsia from '@/assets/biopsia-pulmonar.jpeg';
import drenaje from '@/assets/drenaje-ecografico.jpeg';
import procedimientoTac from '@/assets/procedimiento-tac.jpg';

const diagnostico = [
  { icon: Scan, title: 'Tomografía Computada Multicorte (TAC)', desc: 'Incluye angiotomografía para evaluación vascular de alta precisión.', img: tomografia },
  { icon: Waves, title: 'Ecografía General, Doppler y Gineco-obstétrica 3D/4D', desc: 'Estudios no invasivos en tiempo real para órganos internos, mama y seguimiento gestacional.', img: ecografia },
  { icon: Radio, title: 'Resonancia Magnética', desc: 'Imágenes de alto contraste sin radiación para diagnóstico avanzado.', img: resonancia },
  { icon: ImageIcon, title: 'Radiología Digital', desc: 'Radiología convencional de alta resolución con menor exposición.', img: radiologia },
  { icon: Bone, title: 'Mamografía y Densitometría Ósea', desc: 'Detección temprana de patologías mamarias y evaluación de densidad ósea.', img: mamografia },
];

const intervencionismo = [
  { icon: Syringe, title: 'Biopsias Percutáneas', desc: 'Pulmón, hígado, tiroides, mama y hueso — guiadas por imagen.', img: biopsia },
  { icon: Droplets, title: 'Drenajes Percutáneos', desc: 'Drenaje de vía biliar y colecciones guiado por imagen.', img: drenaje },
  { icon: Stethoscope, title: 'Enfermedades Pulmonares Intersticiales', desc: 'Diagnóstico de fibrosis pulmonar y patrones fibrosantes.', img: procedimientoTac },
];

function ServiceCard({ icon: Icon, title, desc, img, dark = false }: { icon: React.ElementType; title: string; desc: string; img: string; dark?: boolean }) {
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 group cursor-default ${
        dark
          ? 'bg-white/5 border border-white/10 hover:border-gold/40 hover:shadow-lg'
          : 'bg-white border border-pastel/20 hover:border-gold hover:shadow-lg'
      }`}
      style={{ boxShadow: '0 4px 16px rgba(44,95,138,0.06)' }}
    >
      <div className="service-card-img aspect-[16/10] overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-[400ms] group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-serene/20" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Icon className="w-5 h-5 text-pastel shrink-0" strokeWidth={1.5} />
          <h4 className={`font-serif text-base font-semibold ${dark ? 'text-white' : 'text-text-primary'}`}>{title}</h4>
        </div>
        <p className={`text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-text-secondary'}`}>{desc}</p>
      </div>
    </div>
  );
}

export default function Servicios() {
  return (
    <main className="min-h-screen bg-ice">
      <Navbar />

      {/* Header — serene */}
      <div className="bg-serene pt-28 pb-16">
        <div className="section-container text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-gold">
            Especialidad
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Servicios Médicos</h1>
          <div className="mx-auto my-4 gold-separator" style={{ width: '6rem' }} />
          <p className="max-w-xl mx-auto text-white/65">
            Tecnología avanzada y precisión diagnóstica para el mejor cuidado de su salud.
          </p>
        </div>
      </div>

      {/* Diagnóstico — warm white */}
      <div className="bg-warm-white py-20">
        <div className="section-container">
          <h2 className="font-serif text-2xl font-bold mb-2 text-text-primary">
            Estudios de Diagnóstico
          </h2>
          <div className="w-12 h-0.5 bg-gold mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diagnostico.map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </div>

      {/* Intervencionismo — serene */}
      <div className="bg-serene py-20">
        <div className="section-container">
          <h2 className="font-serif text-2xl font-bold mb-2 text-white">
            Radiología Intervencionista
          </h2>
          <div className="w-12 h-0.5 bg-gold mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {intervencionismo.map((s, i) => <ServiceCard key={i} {...s} dark />)}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-ice border-t border-border py-8">
        <div className="section-container text-center">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} Dr. Francisco Faicán. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </main>
  );
}
