import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  GraduationCap,
  Briefcase,
  Stethoscope,
  Globe,
  BookOpen,
  Mic,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const formation = [
  { year: '2001–2007', title: 'MD — Médico', place: 'Universidad de Cuenca, Facultad de Ciencias Médicas' },
  { year: '2007–2008', title: 'Internado Rotativo', place: 'Hospital José Carrasco Arteaga, Cuenca' },
  { year: '2012–2015', title: 'Residencia en Radiología', place: 'Universidad de Ciencias Médicas de Holguín, Cuba' },
  { year: '2017', title: 'Rotación Internacional', place: 'Instituto Radiológico Mar del Plata, Argentina' },
];

const trajectory = [
  { year: '2016–presente', role: 'Profesor de Radiología Tórax y Abdomen', place: 'Universidad de Cuenca — Posgrado' },
  { year: '2016–2022', role: 'Jefe de Servicio de Radiología', place: 'Hospital Vicente Corral Moscoso' },
  { year: '2022–2024', role: 'Director del Departamento de Imágenes', place: 'Asociación Latinoamericana de Tórax (ALAT)' },
  { year: '2018–presente', role: 'Coordinador Local', place: 'International Teleconference Program — LSU Health Shreveport' },
  { year: '2020–2022', role: 'Miembro del Comité Científico', place: 'Federación Ecuatoriana de Radiología e Imagen (FERI)' },
];

const specialties = [
  'Biopsia percutánea guiada por ultrasonido y tomografía',
  'Diagnóstico de enfermedades intersticiales pulmonares y patrones fibrosantes',
  'Intervencionismo extravascular',
  'Imagenología de tórax, abdomen y cuerpo completo',
];

const affiliations = [
  'Radiology Society of North America (RSNA)',
  'American Society of Emergency Radiology',
  'Asociación Latinoamericana de Tórax (ALAT)',
  'Federación Ecuatoriana de Radiología e Imagen (FERI)',
  'FAARDIT',
];

const publications = [
  { title: 'Malformación de Abernethy tipo 2', journal: 'Rev. Fac. Cienc. Méd. Univ. Cuenca, 2018' },
  { title: 'Enfisema Lobar Congénito en recién nacido', journal: 'Revista FCM — Universidad de Cuenca' },
  { title: 'Hepatopulmonary syndrome due to congenital extrahepatic portosystemic shunts', journal: 'Annals of Pediatric Surgery' },
  { title: 'Consenso FERI COVID-19', journal: '2020' },
];

const congresses = [
  { event: 'Speaker ALAT Lima 2022', topic: 'Enfermedades Intersticiales Pulmonares' },
  { event: 'Tórax Fest 2021', topic: 'Costa Rica y Panamá' },
  { event: 'IX Curso Internacional de Radiología Oncológica', topic: 'Lima, Perú 2022' },
  { event: 'Curso Internacional de Radiología en el Bicentenario', topic: 'Cusco, Perú 2022' },
  { event: 'Congresos Internacionales Universidad de Cuenca', topic: '2017–2019' },
];

function SectionTitle({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 rounded-lg bg-[#0A1628] flex items-center justify-center">
        <Icon className="w-5 h-5 text-medical-accent" />
      </div>
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0A1628]">{children}</h3>
    </div>
  );
}

function Divider() {
  return <hr className="border-t border-gray-200 my-12 md:my-16" />;
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.profile-block').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 85%' },
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="perfil" ref={sectionRef} className="relative z-10 bg-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="profile-block text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-medical-accent mb-4">
            Perfil Profesional
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A1628] mb-2">
            Dr. José Francisco Faicán Benenaula
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Médico Radiólogo · Especialista en Imágenes de Tórax y Abdomen
          </p>
        </div>

        {/* BLOQUE 1 — Biografía */}
        <div className="profile-block">
          <SectionTitle icon={Stethoscope}>Biografía</SectionTitle>
          <p className="text-gray-600 text-lg leading-relaxed">
            El Dr. José Francisco Faicán Benenaula es un médico radiólogo especialista en imágenes de tórax y abdomen, reconocido como figura clave en el diagnóstico de enfermedades pulmonares complejas en Ecuador con proyección internacional. Su carrera combina una sólida formación académica, experiencia clínica de alto nivel y un compromiso activo con la docencia y la investigación científica.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Becario del Ministerio de Salud Pública del Ecuador para especialización en Cuba, su trayectoria refleja un compromiso constante con la excelencia médica y la innovación diagnóstica.
          </p>
        </div>

        <Divider />

        {/* BLOQUE 2 — Formación */}
        <div className="profile-block">
          <SectionTitle icon={GraduationCap}>Formación Académica</SectionTitle>
          <div className="space-y-6">
            {formation.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-28 shrink-0 text-right">
                  <span className="text-sm font-semibold text-[#0A1628] tracking-wide">{item.year}</span>
                </div>
                <div className="relative pl-6 border-l-2 border-gray-200 pb-2">
                  <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-medical-accent" />
                  <p className="font-semibold text-[#0A1628]">{item.title}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{item.place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* BLOQUE 3 — Trayectoria */}
        <div className="profile-block">
          <SectionTitle icon={Briefcase}>Trayectoria Profesional</SectionTitle>
          <div className="space-y-6">
            {trajectory.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-28 shrink-0 text-right">
                  <span className="text-sm font-semibold text-[#0A1628] tracking-wide">{item.year}</span>
                </div>
                <div className="relative pl-6 border-l-2 border-gray-200 pb-2">
                  <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-medical-accent" />
                  <p className="font-semibold text-[#0A1628]">{item.role}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{item.place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* BLOQUE 4 — Especialidades */}
        <div className="profile-block">
          <SectionTitle icon={Stethoscope}>Áreas de Especialización</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specialties.map((s, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="mt-0.5 w-2 h-2 rounded-full bg-medical-accent shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* BLOQUE 5 — Afiliaciones */}
        <div className="profile-block">
          <SectionTitle icon={Globe}>Afiliaciones Internacionales</SectionTitle>
          <div className="flex flex-wrap gap-3">
            {affiliations.map((a, i) => (
              <span
                key={i}
                className="inline-block px-4 py-2 rounded-full bg-[#0A1628] text-white text-sm font-medium"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        <Divider />

        {/* BLOQUE 6 — Publicaciones */}
        <div className="profile-block">
          <SectionTitle icon={BookOpen}>Publicaciones Destacadas</SectionTitle>
          <div className="space-y-5">
            {publications.map((p, i) => (
              <div key={i} className="pl-5 border-l-4 border-medical-accent">
                <p className="font-semibold text-[#0A1628]">{p.title}</p>
                <p className="text-gray-500 text-sm italic mt-1">{p.journal}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* BLOQUE 7 — Congresos */}
        <div className="profile-block">
          <SectionTitle icon={Mic}>Congresos y Conferencias Destacadas</SectionTitle>
          <div className="space-y-5">
            {congresses.map((c, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-medical-accent shrink-0" />
                <div>
                  <p className="font-semibold text-[#0A1628]">{c.event}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{c.topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
