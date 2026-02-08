import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Teaching from './components/Teaching';
import Publications from './components/Publications';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Teaching />
        <Gallery />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;