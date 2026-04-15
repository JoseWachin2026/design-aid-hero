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
        'fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12',
        scrolled ? 'py-3 shadow-lg bg-serene/95 backdrop-blur-sm' : 'py-5 bg-serene'
      )}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className="font-serif text-sm font-bold text-white tracking-wide leading-tight">
            Dr. Francisco Faicán
          </span>
          <span className="text-[9px] tracking-[0.2em] uppercase text-gold">
            Imagenología
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm">
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                'transition-colors font-medium',
                location.pathname === item.to
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            className={cn(
              'font-semibold transition-colors',
              location.pathname === '/contacto'
                ? 'text-gold'
                : 'text-gold/80 hover:text-gold'
            )}
          >
            Contáctame
          </Link>
          <Link
            to="/agendar"
            className={cn(
              'px-5 py-2 rounded-full font-semibold text-sm transition-all hover:brightness-110 bg-gold text-text-primary',
              location.pathname === '/agendar' && 'ring-2 ring-white/30'
            )}
          >
            Agendar Cita
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 w-full shadow-lg border-t border-white/10 py-4 px-6 flex flex-col gap-3 bg-serene">
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium py-2 text-white/75 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contacto" className="text-sm font-semibold text-gold py-2">
            Contáctame
          </Link>
          <Link
            to="/agendar"
            className="text-center px-5 py-2.5 rounded-full font-semibold text-sm bg-gold text-text-primary"
          >
            Agendar Cita
          </Link>
        </div>
      )}
    </nav>
  );
}
