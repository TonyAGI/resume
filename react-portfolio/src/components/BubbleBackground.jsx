import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
`;

const Bubble = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  pointer-events: none;
`;

const GradientBubble = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(1px);
`;

const BubbleBackground = () => {
  const bubbles = useMemo(() => {
    const bubbleArray = [];
    
    // Generate regular glass bubbles
    for (let i = 0; i < 20; i++) {
      bubbleArray.push({
        id: `bubble-${i}`,
        size: Math.random() * 100 + 30, // 30-130px
        x: Math.random() * 100, // percentage
        y: Math.random() * 100, // percentage
        duration: Math.random() * 20 + 15, // 15-35 seconds
        delay: Math.random() * 10,
        opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
        type: 'glass'
      });
    }
    
    // Generate gradient bubbles
    for (let i = 0; i < 8; i++) {
      const gradients = [
        'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))',
        'linear-gradient(135deg, rgba(69, 183, 209, 0.1), rgba(150, 206, 180, 0.1))',
        'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
        'linear-gradient(135deg, rgba(240, 147, 251, 0.1), rgba(245, 87, 108, 0.1))'
      ];
      
      bubbleArray.push({
        id: `gradient-${i}`,
        size: Math.random() * 150 + 80, // 80-230px
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 25 + 20, // 20-45 seconds
        delay: Math.random() * 15,
        gradient: gradients[Math.floor(Math.random() * gradients.length)],
        type: 'gradient'
      });
    }
    
    return bubbleArray;
  }, []);

  const getAnimationProps = (bubble) => {
    const baseY = bubble.y;
    const amplitude = 20 + Math.random() * 30; // 20-50px movement
    
    return {
      y: [
        `${baseY}vh`,
        `${baseY - amplitude}vh`,
        `${baseY + amplitude}vh`,
        `${baseY}vh`
      ],
      x: [
        `${bubble.x}vw`,
        `${bubble.x + (Math.random() - 0.5) * 20}vw`,
        `${bubble.x + (Math.random() - 0.5) * 15}vw`,
        `${bubble.x}vw`
      ],
      scale: [1, 1.1, 0.9, 1],
      opacity: bubble.type === 'glass' 
        ? [bubble.opacity, bubble.opacity * 1.5, bubble.opacity * 0.5, bubble.opacity]
        : [0.1, 0.2, 0.05, 0.1]
    };
  };

  const getTransitionProps = (bubble) => ({
    duration: bubble.duration,
    delay: bubble.delay,
    repeat: Infinity,
    ease: "easeInOut",
    times: [0, 0.33, 0.66, 1]
  });

  return (
    <BackgroundContainer>
      {bubbles.map((bubble) => {
        if (bubble.type === 'glass') {
          return (
            <Bubble
              key={bubble.id}
              style={{
                width: bubble.size,
                height: bubble.size,
                opacity: bubble.opacity
              }}
              animate={getAnimationProps(bubble)}
              transition={getTransitionProps(bubble)}
            />
          );
        } else {
          return (
            <GradientBubble
              key={bubble.id}
              style={{
                width: bubble.size,
                height: bubble.size,
                background: bubble.gradient
              }}
              animate={getAnimationProps(bubble)}
              transition={getTransitionProps(bubble)}
            />
          );
        }
      })}
      
      {/* Large ambient bubbles */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(2px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.03) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(1px)'
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        style={{
          position: 'absolute',
          top: '60%',
          left: '70%',
          width: '180px',
          height: '180px',
          background: 'radial-gradient(circle, rgba(78, 205, 196, 0.04) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(1.5px)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.1, 0.4],
          x: [0, 20, 0],
          y: [0, -15, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </BackgroundContainer>
  );
};

export default BubbleBackground;