import { Instagram, Mail, Phone, Link as LinkIcon } from 'lucide-react';

export default function Contact() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-sapphire-900/50 backdrop-blur-lg pt-20 pb-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">Dr. Francisco Faicán</h3>
            <p className="text-medical-accent text-sm uppercase tracking-widest mb-6">Imagenología</p>
            <p className="text-silver-400 max-w-sm mb-8">
              Diagnósticos precisos y confiables con tecnología de vanguardia. Su salud en manos de un experto.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/dr.ffaican?igsh=NjBqdndwZzdpZ3dz" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-silver-300 hover:bg-medical-accent hover:text-sapphire-900 hover:border-medical-accent transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linktr.ee/drffaican" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-silver-300 hover:bg-medical-accent hover:text-sapphire-900 hover:border-medical-accent transition-all">
                <LinkIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contacto Directo</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/593998254115" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-silver-400 hover:text-medical-accent transition-colors">
                  <Phone className="w-5 h-5" /><span>+593 99 825 4115</span>
                </a>
              </li>
              <li>
                <a href="mailto:franciscofaican@gmail.com"
                  className="flex items-center gap-3 text-silver-400 hover:text-medical-accent transition-colors">
                  <Mail className="w-5 h-5" /><span>franciscofaican@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-silver-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#perfil" className="text-silver-400 hover:text-white transition-colors">Perfil Profesional</a></li>
              <li><a href="#servicios" className="text-silver-400 hover:text-white transition-colors">Servicios Médicos</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-silver-500 text-sm">© {new Date().getFullYear()} Dr. Francisco Faicán. Todos los derechos reservados.</p>
          <p className="text-silver-500 text-sm">Cuenca, Ecuador</p>
        </div>
      </div>
    </footer>
  );
}
