import { useReveal } from '../components/useReveal';
import Hero from '../components/Hero';
import About from '../components/About';
import Showcase from '../components/Showcase';

export default function HomePage() {
  useReveal();
  return (
    <>
      <Hero />
      <About />
      <Showcase />
    </>
  );
}
