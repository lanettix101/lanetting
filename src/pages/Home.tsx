import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Timeline from '../components/sections/Timeline';
import Services from '../components/sections/Services';
import Platforms from '../components/sections/Platforms';
import Contact from '../components/sections/Contact';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Timeline />
      <Services />
      <Platforms />
      <Contact />
    </>
  );
}
