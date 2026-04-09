import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4",
      scrolled ? "bg-sapphire-900/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-serif text-xl md:text-2xl font-bold text-white tracking-wide">
            Dr. Francisco Faicán
          </span>
          <span className="text-xs md:text-sm text-medical-accent tracking-widest uppercase">
            Imagenología
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#inicio" className="text-silver-300 hover:text-white transition-colors">Inicio</a>
          <a href="#perfil" className="text-silver-300 hover:text-white transition-colors">Perfil</a>
          <a href="#servicios" className="text-silver-300 hover:text-white transition-colors">Servicios</a>
          <a
            href="https://wa.me/593998254115"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-white text-sapphire-900 hover:bg-medical-accent hover:text-white transition-all duration-300 font-semibold"
          >
            Agendar Cita
          </a>
        </div>
      </div>
    </nav>
  );
}
