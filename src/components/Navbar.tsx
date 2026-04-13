import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Perfil', to: '/perfil' },
  { label: 'Servicios', to: '/servicios' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12",
        scrolled ? "py-3 shadow-md" : "py-5"
      )}
      style={{ backgroundColor: '#0D2137' }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className="font-serif text-sm md:text-base font-bold text-white tracking-wide leading-tight">
            Dr. Francisco Faicán
          </span>
          <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase" style={{ color: '#C9A84C' }}>
            Imagenología
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "transition-colors font-medium",
                location.pathname === item.to
                  ? "text-white"
                  : "hover:text-white"
              )}
              style={{ color: location.pathname === item.to ? '#ffffff' : 'rgba(255,255,255,0.75)' }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="font-semibold transition-colors hover:text-white"
            style={{ color: location.pathname === '/contacto' ? '#ffffff' : 'rgba(255,255,255,0.75)' }}
          >
            Contáctame
          </Link>
          <a
            href="https://linktr.ee/drffaican"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#C9A84C', color: '#0D2137' }}
          >
            Agendar Cita
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden absolute top-full left-0 w-full shadow-lg border-t py-4 px-6 flex flex-col gap-3"
          style={{ backgroundColor: '#0D2137', borderColor: '#1A4A6B' }}
        >
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium py-2 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contacto" className="text-sm font-semibold text-white py-2">
            Contáctame
          </Link>
          <a
            href="https://linktr.ee/drffaican"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center px-5 py-2.5 rounded-full font-semibold text-sm"
            style={{ backgroundColor: '#C9A84C', color: '#0D2137' }}
          >
            Agendar Cita
          </a>
        </div>
      )}
    </nav>
  );
}
