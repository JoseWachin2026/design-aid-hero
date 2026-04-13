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
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12",
      scrolled ? "bg-card/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className="font-serif text-sm md:text-base font-bold text-primary tracking-wide leading-tight">
            Dr. Francisco Faicán
          </span>
          <span className="text-[9px] md:text-[10px] text-secondary tracking-[0.2em] uppercase">
            Imagenología
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "transition-colors font-medium",
                location.pathname === item.to
                  ? "text-primary"
                  : "text-secondary hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            className={cn(
              "font-semibold transition-colors",
              location.pathname === '/contacto'
                ? "text-primary"
                : "text-secondary hover:text-primary"
            )}
          >
            Contáctame
          </Link>
          <a
            href="https://linktr.ee/drffaican"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold text-sm"
          >
            Agendar Cita
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-card shadow-lg border-t border-border py-4 px-6 flex flex-col gap-3">
          {navItems.map(item => (
            <Link key={item.to} to={item.to} className="text-sm font-medium text-secondary hover:text-primary py-2">
              {item.label}
            </Link>
          ))}
          <Link to="/contacto" className="text-sm font-semibold text-primary py-2">
            Contáctame
          </Link>
          <a
            href="https://linktr.ee/drffaican"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm"
          >
            Agendar Cita
          </a>
        </div>
      )}
    </nav>
  );
}
