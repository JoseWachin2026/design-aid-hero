import CustomCursor from '@/components/CustomCursor';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <main className="relative min-h-screen selection:bg-medical-accent/30 selection:text-white">
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
};

export default Index;
