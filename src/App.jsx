import './App.css';
import './index.css'
import Header from './Components/Header/Header';
import LinksNavBar from './Components/Navbar/LinksNavBar'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import React, { useState, useEffect } from 'react';

function App() {

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section id='home'>
        <div className='w-100 h-100 bg-gradient-to-b from-indigo-950 to-violet-700'>
          <LinksNavBar />
          <div className="flex w-full justify-center mt-20">
            <Header />
          </div>
          <div className="mt-20">
            <About />
          </div>
          <div className="mt-20">
            <Contact />
          </div>
          {showScroll && (
            <div className="scrollTop" onClick={scrollTop}>
              <i class="fa-solid fa-caret-up"></i>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
