/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MissionMotto } from './components/MissionMotto';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5dc] selection:bg-[#D4AF37] selection:text-[#0a0a0a] font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionMotto />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
