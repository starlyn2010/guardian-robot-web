import Hero from '@/components/Hero';
import Viaje from '@/components/Viaje';
import Timeline from '@/components/Timeline';
import Soluciones from '@/components/Soluciones';
import TechStack from '@/components/TechStack';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Viaje />
      <Timeline />
      <Soluciones />
      <TechStack />
      <Download />
      <Footer />
    </main>
  );
}
