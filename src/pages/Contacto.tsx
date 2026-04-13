import Navbar from '@/components/Navbar';
import { Phone, Mail, Instagram, MapPin, ExternalLink } from 'lucide-react';

export default function Contacto() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-3">Contacto</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Contáctame</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Estoy a su disposición para consultas, citas y coordinación de estudios de imagen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact info */}
            <div className="space-y-5">
              <a
                href="https://wa.me/593998254115"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-full bg-muted flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" strokeWidth={1.2} />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">WhatsApp</p>
                  <p className="text-muted-foreground text-sm">+593 99 825 4115</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/dr.ffaican?igsh=NjBqdndwZzdpZ3dz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-full bg-muted flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-primary" strokeWidth={1.2} />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Instagram</p>
                  <p className="text-muted-foreground text-sm">@dr.ffaican</p>
                </div>
              </a>

              <a
                href="https://linktr.ee/drffaican"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Agendar Cita
              </a>
            </div>

            {/* Map + address */}
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-border aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.017!2d-79.0057!3d-2.9001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd18355e813c5b%3A0x7c5c18da2c247ab3!2sInstituto+de+Diagn%C3%B3stico+por+Imagen!5e0!3m2!1ses!2sec!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del consultorio"
                />
              </div>

              <div className="flex items-start gap-3 p-4">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.2} />
                <div>
                  <p className="text-sm text-foreground font-medium">Cuenca, Ecuador</p>
                  <p className="text-sm text-muted-foreground">Inés Salcedo 1-99 entre Agustín Cueva y Federico Proaño</p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/kMQmnuYcqap6ZkNf6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full font-medium text-sm text-foreground hover:bg-muted transition-colors"
              >
                <ExternalLink className="w-4 h-4" strokeWidth={1.2} />
                Ver en Google Maps
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-8 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Dr. Francisco Faicán. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/593998254115"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="WhatsApp"
      >
        <Phone className="w-6 h-6" strokeWidth={1.2} />
      </a>
    </main>
  );
}
