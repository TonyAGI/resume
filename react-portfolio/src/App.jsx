import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BubbleBackground from './components/BubbleBackground';
import './styles/GlobalStyles.css';

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const SectionContainer = styled(motion.div)`
  position: relative;
  z-index: 10;
`;

const ScrollIndicator = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  border-radius: 0 0 20px 20px;
  transform-origin: 0%;
  z-index: 1000;
`;

function App() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 2000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollProgress = scrollY / (document.documentElement.scrollHeight - window.innerHeight);

  const sections = [
    { id: 'hero', component: <Hero /> },
    { id: 'about', component: <About /> },
    { id: 'experience', component: <Experience /> },
    { id: 'projects', component: <Projects /> },
    { id: 'contact', component: <Contact /> }
  ];

  const LoadingScreen = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `;

  const LoadingBubble = styled(motion.div)`
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    margin: 0 10px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  `;

  if (isLoading) {
    return (
      <LoadingScreen
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ display: 'flex' }}>
          {[0, 1, 2].map((i) => (
            <LoadingBubble
              key={i}
              animate={{
                y: [-20, -40, -20],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </LoadingScreen>
    );
  }

  return (
    <AppContainer>
      <BubbleBackground />
      
      <ScrollIndicator
        style={{ scaleX: scrollProgress }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress }}
        transition={{ duration: 0.1 }}
      />

      <Navigation 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection}
      />

      <AnimatePresence mode="wait">
        {sections.map(({ id, component }) => (
          <SectionContainer
            key={id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              staggerChildren: 0.2
            }}
          >
            {component}
          </SectionContainer>
        ))}
      </AnimatePresence>
    </AppContainer>
  );
}

export default App;