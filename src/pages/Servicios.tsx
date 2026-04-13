import Navbar from '@/components/Navbar';
import { Scan, Waves, Radio, ImageIcon, Bone, Syringe, Droplets, Stethoscope, MapPin, ExternalLink } from 'lucide-react';
import idiImg from '@/assets/idi-centro.jpg';

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
    <div className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow">
      <Icon className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />
      <h4 className="font-serif text-lg font-semibold text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Servicios() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-3">Especialidad</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Servicios Médicos</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tecnología avanzada y precisión diagnóstica para el mejor cuidado de su salud.
            </p>
          </div>

          {/* Diagnóstico */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Estudios de Diagnóstico</h2>
            <div className="w-12 h-0.5 bg-primary mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {diagnostico.map((s, i) => <ServiceCard key={i} {...s} />)}
            </div>
          </div>

          {/* Intervencionismo */}
          <div className="mb-20">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Radiología Intervencionista</h2>
            <div className="w-12 h-0.5 bg-primary mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {intervencionismo.map((s, i) => <ServiceCard key={i} {...s} />)}
            </div>
          </div>

          {/* IDI Section */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">
                  <MapPin className="w-4 h-4" strokeWidth={1.5} />
                  Centro de Imagen
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Instituto de Diagnóstico por Imagen (IDI)
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Inés Salcedo 1-99 entre Agustín Cueva y Federico Proaño.
                </p>
                <p className="text-muted-foreground text-sm mb-6">Cuenca, Ecuador</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.idicuenca.com/contactanos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
                  >
                    Agendar con IDI
                  </a>
                  <a
                    href="https://maps.app.goo.gl/FUDW5PsfV6YKwNaB9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full font-medium text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                    Cómo llegar
                  </a>
                </div>
              </div>
              <div className="relative aspect-video md:aspect-auto">
                <img src={idiImg} alt="Instituto de Diagnóstico por Imagen" className="w-full h-full object-cover" />
                {/* Map overlay */}
                <a
                  href="https://maps.app.goo.gl/FUDW5PsfV6YKwNaB9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-end justify-end p-4"
                >
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-medium text-primary shadow-sm">
                    Ver en Google Maps →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
