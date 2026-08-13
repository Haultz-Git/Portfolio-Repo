import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import TechShowcase from './components/TechShowcase';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 mix-blend-multiply"
        style={{
          backgroundImage:
            'repeating-linear-gradient(180deg, rgba(0,0,0,0.34) 0px, rgba(0,0,0,0.34) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 3px)',
        }}
      />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[51] overflow-hidden">
        <div
          className="animate-sweep absolute left-0 right-0 h-[90px]"
          style={{
            background:
              'linear-gradient(180deg, rgba(46,230,246,0) 0%, rgba(46,230,246,0.07) 50%, rgba(46,230,246,0) 100%)',
          }}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[49]"
        style={{
          boxShadow: 'inset 0 0 200px 60px rgba(6,1,16,0.85)',
          background: 'radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 55%, rgba(6,1,16,0.55) 100%)',
        }}
      />
      <Header />
      <main>
        <Hero />
        <Skills />
        <TechShowcase />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
