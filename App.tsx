import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-rose-200">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Process />
      <Testimonials />
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}

export default App;