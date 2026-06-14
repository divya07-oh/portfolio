import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Journey from './pages/Journey';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home key="home" setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About key="about" />;
      case 'skills':
        return <Skills key="skills" />;
      case 'projects':
        return <Projects key="projects" />;
      case 'journey':
        return <Journey key="journey" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return <Home key="home" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#FFFFFF] font-sans selection:bg-[#D4AF37] selection:text-black flex flex-col">
      <CursorGlow />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* 
        Main content area needs top padding to account for fixed navbar.
        Using flex-grow to push footer to the bottom.
      */}
      <main className="flex-grow pt-[72px] relative">
        <AnimatePresence mode="wait">
          <PageTransition key={currentPage}>
            {renderPage()}
          </PageTransition>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
