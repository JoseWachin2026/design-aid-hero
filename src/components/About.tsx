import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, GraduationCap, Stethoscope } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        x: -50, opacity: 0, duration: 1, ease: "power3.out"
      });
      gsap.from(contentRef.current?.children || [], {
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="perfil" ref={sectionRef} className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={imageRef} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-sapphire-600/30 to-medical-accent/20 rounded-[2.5rem] blur-xl -z-10" />
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel border-white/10">
              <img
                src="https://storage.googleapis.com/aistudio-attachments/uploads/40375f4d-1510-44e4-a1a2-89b91c85023a/image.png"
                alt="Dr. Francisco Faicán en procedimiento"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-sapphire-900/20 mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-medical-accent/20 flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-medical-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">10+</p>
                  <p className="text-xs text-silver-400 uppercase tracking-wider">Años de Experiencia</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={contentRef} className="flex flex-col">
            <h2 className="text-sm font-bold tracking-widest text-medical-accent uppercase mb-3">
              Perfil Profesional
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Experiencia y <span className="text-gradient-accent">Dedicación</span>
            </h3>
            <p className="text-silver-300 text-lg leading-relaxed mb-8">
              El Dr. Francisco Faicán es un especialista altamente capacitado en el área de Imagenología, comprometido con brindar diagnósticos precisos que son fundamentales para el tratamiento y recuperación de sus pacientes. Su enfoque combina tecnología de punta con un trato humano y cercano.
            </p>

            <div className="space-y-6">
              <div className="glass-panel p-6 flex gap-4 items-start hover:bg-sapphire-800/60 transition-colors">
                <div className="mt-1 p-2 bg-medical-accent/10 rounded-lg">
                  <Award className="w-6 h-6 text-medical-accent" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Título de Cuarto Nivel</h4>
                  <p className="text-silver-300">Primer Grado en Imagenología.</p>
                  <p className="text-silver-400 text-sm mt-1">Universidad de Ciencias Médicas de Holguín</p>
                </div>
              </div>

              <div className="glass-panel p-6 flex gap-4 items-start hover:bg-sapphire-800/60 transition-colors">
                <div className="mt-1 p-2 bg-medical-accent/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-medical-accent" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Título de Tercer Nivel</h4>
                  <p className="text-silver-300">Médico.</p>
                  <p className="text-silver-400 text-sm mt-1">Universidad de Cuenca - Facultad de Ciencias Médicas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
