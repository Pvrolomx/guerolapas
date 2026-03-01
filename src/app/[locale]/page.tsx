import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Menu />
      <Testimonials />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
