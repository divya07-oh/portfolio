import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import PageTransition from './components/PageTransition';
import LoadingScreen from './components/LoadingScreen';
import AmbientBackground from './components/AmbientBackground';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Journey from './pages/Journey';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    // Artificial luxury loading delay
    const timer = setTimeout(() => {
      setIsAppLoaded(true);
    }, 1800); // 1.8 seconds
    return () => clearTimeout(timer);
  }, []);

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
    <>
      <AnimatePresence mode="wait">
        {!isAppLoaded ? (
          <LoadingScreen key="loading" />
        ) : (
          <div key="app" className="min-h-screen bg-transparent text-[#FFFFFF] font-sans selection:bg-[#D4AF37] selection:text-black flex flex-col relative">
            <AmbientBackground />
            <CursorGlow />
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            
            <main className="flex-grow pt-[72px] relative z-10">
              <AnimatePresence mode="wait">
                <PageTransition key={currentPage}>
                  {renderPage()}
                </PageTransition>
              </AnimatePresence>
            </main>

            <div className="relative z-10">
              <Footer />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
