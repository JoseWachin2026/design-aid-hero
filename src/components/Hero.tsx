import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import hover1 from '@/assets/hover-1.png';
import hover2 from '@/assets/hover-2.png';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current?.children || [], {
        y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2
      });
      gsap.from(imageRef.current, {
        scale: 0.9, opacity: 0, duration: 1.5, ease: "power3.out", delay: 0.5
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="inicio" ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div ref={textRef} className="flex flex-col items-start z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sapphire-800/50 border border-medical-accent/30 text-medical-accent text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-medical-accent animate-pulse" />
            Especialista en Diagnóstico
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Precisión que <br />
            <span className="text-gradient">salva vidas.</span>
          </h1>

          <p className="text-lg md:text-xl text-silver-400 mb-8 max-w-lg leading-relaxed">
            Dr. Francisco Faicán, Médico Especialista de Primer Grado en Imagenología. Diagnósticos confiables, rápidos y con tecnología de vanguardia en Cuenca.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/593998254115"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-sapphire-900 rounded-full font-semibold text-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-medical-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Agendar Cita</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#servicios"
              className="inline-flex items-center px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
            >
              Conocer más
            </a>
          </div>
        </div>

        <div ref={imageRef} className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[3/4] max-w-md mx-auto lg:ml-auto z-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-medical-accent/20 to-transparent rounded-3xl -rotate-6 scale-105 blur-2xl" />

          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 glass-panel group">
            <img
              src={hover1}
              alt="Dr. Francisco Faicán — Bata Médica"
              className="absolute inset-0 w-full h-full object-cover object-[center_15%] scale-110 transition-opacity duration-700 ease-in-out group-hover:opacity-0"
            />
            <img
              src={hover2}
              alt="Dr. Francisco Faicán — Conferencia"
              className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sapphire-900/80 via-transparent to-transparent opacity-60" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-panel p-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-serif font-semibold">Dr. Francisco Faicán</p>
                  <p className="text-medical-accent text-sm">Imagenología</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <ArrowRight className="w-5 h-5 text-white -rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
