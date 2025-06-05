import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 968px) {
    order: -1;
  }
`;

const ProfileImageWrapper = styled(motion.div)`
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  padding: 4px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: #f0f0f0;
  transition: all 0.3s ease;
`;

const FloatingBubble = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  pointer-events: none;
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Greeting = styled(motion.p)`
  font-size: 1.5rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Name = styled(motion.h1)`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #ffffff, #f0f0f0, #e0e0e0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
`;

const Title = styled(motion.p)`
  font-size: clamp(1.3rem, 3vw, 2rem);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const BubbleButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 1rem 2rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const SocialsContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialBubble = styled(motion.div)`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 24px;
    height: 24px;
    fill: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
  }

  &:hover svg {
    fill: rgba(255, 255, 255, 1);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  cursor: pointer;

  @media (max-width: 768px) {
    bottom: 1rem;
  }
`;

const ScrollArrow = styled(motion.div)`
  width: 2px;
  height: 30px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.6));
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    border-right: 2px solid rgba(255, 255, 255, 0.6);
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
    transform: translateX(-50%) rotate(45deg);
  }
`;

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const bubbleData = [
    { size: 60, top: '20%', left: '10%', delay: 0 },
    { size: 40, top: '60%', left: '15%', delay: 1 },
    { size: 80, top: '30%', right: '10%', delay: 2 },
    { size: 50, bottom: '20%', right: '20%', delay: 1.5 },
  ];

  const handleResumeClick = () => {
    window.open('/resume-example.pdf', '_blank');
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection id="hero">
      {/* Floating Bubbles */}
      {bubbleData.map((bubble, index) => (
        <FloatingBubble
          key={index}
          style={{
            width: bubble.size,
            height: bubble.size,
            ...bubble
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      <HeroContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TextContainer variants={itemVariants}>
          <Greeting variants={itemVariants}>
            Hello, I'm
          </Greeting>
          
          <Name 
            variants={itemVariants}
            animate={{
              ...itemVariants.visible,
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5
            }}
          >
            Tony Oganda
          </Name>
          
          <Title variants={itemVariants}>
            Fullstack Developer
          </Title>

          <ButtonContainer variants={itemVariants}>
            <BubbleButton
              onClick={handleResumeClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </BubbleButton>
          </ButtonContainer>

          <SocialsContainer variants={itemVariants}>
            <SocialBubble
              onClick={() => handleSocialClick('https://linkedin.com/in/tony-oganda-38a9b025b')}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </SocialBubble>

            <SocialBubble
              onClick={() => handleSocialClick('https://github.com/TonyAGI')}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </SocialBubble>
          </SocialsContainer>
        </TextContainer>

        <ImageContainer variants={imageVariants}>
          <ProfileImageWrapper
            animate={floatingAnimation}
            style={{
              x: mousePosition.x,
              y: mousePosition.y
            }}
          >
            <ProfileImage 
              src="/about-pic.png" 
              alt="Tony Oganda"
              onError={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
              }}
            />
          </ProfileImageWrapper>
        </ImageContainer>
      </HeroContainer>

      <ScrollIndicator
        onClick={scrollToNext}
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.1 }}
      >
        <span>Scroll Down</span>
        <ScrollArrow />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;