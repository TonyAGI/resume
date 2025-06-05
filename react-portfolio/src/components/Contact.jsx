import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ContactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

const ContactIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${props => props.gradient || 'linear-gradient(135deg, #ff6b6b, #4ecdc4)'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  svg {
    width: 32px;
    height: 32px;
    fill: white;
  }

  ${ContactCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

const ContactLabel = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ContactInfo = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: block;

  &:hover {
    color: rgba(255, 255, 255, 1);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-top: 2rem;
  }
`;

const SocialBubble = styled(motion.a)`
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-8px) scale(1.1);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }

  svg {
    width: 28px;
    height: 28px;
    fill: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
  }

  &:hover svg {
    fill: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  pointer-events: none;
`;

const Footer = styled(motion.div)`
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const contactData = [
    {
      id: 1,
      label: 'Email',
      info: 'tonyoganda9@gmail.com',
      link: 'mailto:tonyoganda9@gmail.com',
      gradient: 'linear-gradient(135deg, #ff6b6b, #ffa726)',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
        </svg>
      )
    },
    {
      id: 2,
      label: 'LinkedIn',
      info: 'Connect with me',
      link: 'https://linkedin.com/in/tony-oganda-38a9b025b',
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/TonyAGI',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/tony-oganda-38a9b025b',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const floatingElements = [
    { size: 40, top: '10%', left: '10%', delay: 0 },
    { size: 60, top: '20%', right: '15%', delay: 1 },
    { size: 30, bottom: '30%', left: '20%', delay: 2 },
    { size: 50, bottom: '10%', right: '10%', delay: 1.5 }
  ];

  return (
    <ContactSection id="contact" ref={ref}>
      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <FloatingElement
          key={index}
          style={{
            width: element.size,
            height: element.size,
            ...element
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      <ContactContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <SectionHeader variants={itemVariants}>
          <SectionSubtitle variants={itemVariants}>
            Get in Touch
          </SectionSubtitle>
          <SectionTitle variants={itemVariants}>
            Contact Me
          </SectionTitle>
        </SectionHeader>

        <ContactGrid>
          {contactData.map((contact, index) => (
            <ContactCard
              key={contact.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              onClick={() => window.open(contact.link, contact.link.startsWith('mailto:') ? '_self' : '_blank')}
            >
              <ContactIcon gradient={contact.gradient}>
                {contact.icon}
              </ContactIcon>
              <ContactLabel>{contact.label}</ContactLabel>
              <ContactInfo
                href={contact.link}
                target={contact.link.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                {contact.info}
              </ContactInfo>
            </ContactCard>
          ))}
        </ContactGrid>

        <SocialLinks variants={itemVariants}>
          {socialLinks.map((social, index) => (
            <SocialBubble
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                rotate: index % 2 === 0 ? 5 : -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </SocialBubble>
          ))}
        </SocialLinks>

        <Footer variants={itemVariants}>
          <Copyright>
            Copyright © 2025 Tony Oganda. All Rights Reserved.
          </Copyright>
        </Footer>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;