import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, Scan, Waves, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Scan className="w-8 h-8" />,
    title: "Tomografía Computarizada",
    description: "Imágenes detalladas de cortes transversales del cuerpo para diagnósticos precisos."
  },
  {
    icon: <Waves className="w-8 h-8" />,
    title: "Ecografía / Ultrasonido",
    description: "Estudios no invasivos en tiempo real para órganos internos y seguimiento gestacional."
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Rayos X Digitales",
    description: "Radiología convencional de alta resolución con menor exposición a la radiación."
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current?.children || [], {
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out"
      });
      gsap.from(locationRef.current, {
        scrollTrigger: { trigger: locationRef.current, start: "top 85%" },
        scale: 0.95, opacity: 0, duration: 1, ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="servicios" ref={sectionRef} className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-medical-accent uppercase mb-3">Especialidad</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Estudios <span className="text-gradient-accent">Médicos</span>
          </h3>
          <p className="text-silver-400 max-w-2xl mx-auto text-lg">
            Tecnología avanzada y precisión diagnóstica para garantizar el mejor cuidado de su salud.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div key={index} className="glass-panel p-8 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-sapphire-900/50 border border-white/5 flex items-center justify-center text-medical-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
              <p className="text-silver-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div ref={locationRef} className="relative rounded-3xl overflow-hidden glass-panel border-white/20 p-1">
          <div className="absolute inset-0 bg-gradient-to-r from-sapphire-900 via-sapphire-800 to-sapphire-900 opacity-90" />
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-accent/10 text-medical-accent text-sm font-medium mb-4">
                <MapPin className="w-4 h-4" />
                Lugar de Atención
              </div>
              <h4 className="text-3xl font-serif font-bold text-white mb-2">
                Instituto de Diagnóstico por Imagen (IDI)
              </h4>
              <p className="text-silver-300 text-lg mb-6">
                Inés Salcedo 1-99 entre Agustín Cueva y Federico Proaño.<br />
                Cuenca, Ecuador.
              </p>
              <a
                href="https://wa.me/593998254115"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-medical-accent text-sapphire-900 rounded-full font-semibold hover:bg-white transition-colors"
              >
                Agendar en IDI
              </a>
            </div>
            <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://storage.googleapis.com/aistudio-attachments/uploads/40375f4d-1510-44e4-a1a2-89b91c85023a/image.png"
                alt="Instituto de Diagnóstico por Imagen"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
