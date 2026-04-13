import Navbar from '@/components/Navbar';
import About from '@/components/About';

export default function Perfil() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <About />
      </div>
    </main>
  );
}
