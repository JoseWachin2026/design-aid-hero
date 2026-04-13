import { ArrowRight } from 'lucide-react';
import hover1 from '@/assets/hover-1.png';
import hover2 from '@/assets/hover-2.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-4">
            Especialista en Diagnóstico por Imagen
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-primary">
            Dr. Francisco<br />Faicán
          </h1>

          <p className="text-base md:text-lg text-secondary mb-3 font-medium">
            Médico Radiólogo · Imagenología
          </p>

          <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-md leading-relaxed">
            Diagnósticos confiables y precisos con tecnología de vanguardia en Cuenca, Ecuador.
          </p>

          <a
            href="https://linktr.ee/drffaican"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Agendar Cita
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>

        <div className="relative w-full aspect-[3/4] max-w-sm mx-auto lg:ml-auto">
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border shadow-lg group">
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
    </section>
  );
}
