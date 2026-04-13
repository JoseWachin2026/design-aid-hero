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

function SectionTitle({
  icon: Icon,
  children,
  light = false,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <Icon
        className="w-5 h-5 shrink-0"
        style={{ color: light ? '#C9A84C' : '#1A4A6B' }}
        strokeWidth={1.5}
      />
      <h3
        className="font-serif text-2xl md:text-3xl font-bold"
        style={{ color: light ? '#ffffff' : '#0D2137' }}
      >
        {children}
      </h3>
    </div>
  );
}

function GoldDivider() {
  return (
    <div className="my-12 md:my-16">
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
    </div>
  );
}

function NavyDivider() {
  return (
    <div className="my-14">
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)' }} />
    </div>
  );
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
    <section ref={sectionRef}>

      {/* Header — ice */}
      <div style={{ backgroundColor: '#F4F6F8' }} className="py-16 md:py-20">
        <div className="section-container">
          <div className="profile-block text-center">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: '#1A4A6B' }}
            >
              Perfil Profesional
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-2" style={{ color: '#0D2137' }}>
              Dr. José Francisco Faicán Benenaula
            </h2>
            <div
              className="mx-auto mt-4 mb-6"
              style={{
                height: '2px',
                width: '6rem',
                background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
              }}
            />
            <p className="text-lg mt-4 max-w-2xl mx-auto" style={{ color: '#5A6B7A' }}>
              Médico Radiólogo · Especialista en Imágenes de Tórax y Abdomen
            </p>
          </div>
        </div>
      </div>

      {/* Biografía — ice */}
      <div style={{ backgroundColor: '#F4F6F8' }} className="pb-20">
        <div className="section-container">
          <div className="profile-block">
            <SectionTitle icon={Stethoscope}>Biografía</SectionTitle>
            <p className="text-lg leading-relaxed" style={{ color: '#5A6B7A' }}>
              El Dr. José Francisco Faicán Benenaula es un médico radiólogo especialista en imágenes de tórax y abdomen, reconocido como figura clave en el diagnóstico de enfermedades pulmonares complejas en Ecuador con proyección internacional. Su carrera combina una sólida formación académica, experiencia clínica de alto nivel y un compromiso activo con la docencia y la investigación científica.
            </p>
            <p className="text-lg leading-relaxed mt-4" style={{ color: '#5A6B7A' }}>
              Becario del Ministerio de Salud Pública del Ecuador para especialización en Cuba, su trayectoria refleja un compromiso constante con la excelencia médica y la innovación diagnóstica.
            </p>
          </div>
        </div>
      </div>

      {/* Formación + Trayectoria — navy */}
      <div style={{ backgroundColor: '#0D2137' }} className="py-20 md:py-28">
        <div className="section-container">
          <div className="profile-block">
            <SectionTitle icon={GraduationCap} light>Formación Académica</SectionTitle>
            <div className="space-y-6">
              {formation.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-28 shrink-0 text-right">
                    <span className="text-sm font-semibold text-white tracking-wide">{item.year}</span>
                  </div>
                  <div
                    className="relative pl-6 pb-2"
                    style={{ borderLeft: '2px solid rgba(255,255,255,0.15)' }}
                  >
                    <div
                      className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full"
                      style={{ backgroundColor: '#C9A84C' }}
                    />
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <NavyDivider />

          <div className="profile-block">
            <SectionTitle icon={Briefcase} light>Trayectoria Profesional</SectionTitle>
            <div className="space-y-6">
              {trajectory.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-28 shrink-0 text-right">
                    <span className="text-sm font-semibold text-white tracking-wide">{item.year}</span>
                  </div>
                  <div
                    className="relative pl-6 pb-2"
                    style={{ borderLeft: '2px solid rgba(255,255,255,0.15)' }}
                  >
                    <div
                      className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full"
                      style={{ backgroundColor: '#C9A84C' }}
                    />
                    <p className="font-semibold text-white">{item.role}</p>
                    <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Especialidades + Afiliaciones — ice */}
      <div style={{ backgroundColor: '#F4F6F8' }} className="py-20 md:py-24">
        <div className="section-container">
          <div className="profile-block">
            <SectionTitle icon={Stethoscope}>Áreas de Especialización</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specialties.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white"
                  style={{ border: '1px solid #e2e8f0' }}
                >
                  <div
                    className="mt-0.5 w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: '#1A4A6B' }}
                  />
                  <p className="text-sm leading-relaxed" style={{ color: '#0D2137' }}>{s}</p>
                </div>
              ))}
            </div>
          </div>

          <GoldDivider />

          <div className="profile-block">
            <SectionTitle icon={Globe}>Afiliaciones Internacionales</SectionTitle>
            <div className="flex flex-wrap gap-3">
              {affiliations.map((a, i) => (
                <span
                  key={i}
                  className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-white"
                  style={{ border: '1.5px solid #1A4A6B', color: '#1A4A6B' }}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Publicaciones + Congresos — navy */}
      <div style={{ backgroundColor: '#0D2137' }} className="py-20 md:py-24">
        <div className="section-container">
          <div className="profile-block">
            <SectionTitle icon={BookOpen} light>Publicaciones Destacadas</SectionTitle>
            <div className="space-y-5">
              {publications.map((p, i) => (
                <div
                  key={i}
                  className="pl-5"
                  style={{ borderLeft: '3px solid #C9A84C' }}
                >
                  <p className="font-semibold text-white">{p.title}</p>
                  <p className="text-sm italic mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>{p.journal}</p>
                </div>
              ))}
            </div>
          </div>

          <NavyDivider />

          <div className="profile-block">
            <SectionTitle icon={Mic} light>Congresos y Conferencias Destacadas</SectionTitle>
            <div className="space-y-5">
              {congresses.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: '#C9A84C' }}
                  />
                  <div>
                    <p className="font-semibold text-white">{c.event}</p>
                    <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>{c.topic}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
