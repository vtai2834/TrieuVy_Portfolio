import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/sections/Hero';
import Marquee from '@/sections/Marquee';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import VideoWork from '@/sections/VideoWork';
import CaseStudy from '@/sections/CaseStudy';
import PrintWork from '@/sections/PrintWork';
import Contact from '@/sections/Contact';

/* Page order — reorder, add or remove sections here. */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <VideoWork />
        <CaseStudy />
        <PrintWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
