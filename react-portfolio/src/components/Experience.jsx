import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const ExperienceSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ExperienceContainer = styled.div`
  max-width: 1200px;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

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
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.15);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;

  @media (max-width: 568px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const SkillBubble = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${props => props.skillLevel === 'Experienced' 
      ? 'linear-gradient(90deg, #4ecdc4, #44a08d)' 
      : props.skillLevel === 'Intermediate'
      ? 'linear-gradient(90deg, #ff6b6b, #ffa726)'
      : 'linear-gradient(90deg, #667eea, #764ba2)'};
    border-radius: 20px 20px 0 0;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const SkillIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.skillLevel === 'Experienced' 
    ? 'linear-gradient(135deg, #4ecdc4, #44a08d)' 
    : props.skillLevel === 'Intermediate'
    ? 'linear-gradient(135deg, #ff6b6b, #ffa726)'
    : 'linear-gradient(135deg, #667eea, #764ba2)'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

const SkillName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillLevel = styled.p`
  font-size: 0.9rem;
  color: ${props => props.skillLevel === 'Experienced' 
    ? '#4ecdc4' 
    : props.skillLevel === 'Intermediate'
    ? '#ff6b6b'
    : '#667eea'};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const frontendSkills = [
    { name: 'HTML', level: 'Experienced', icon: 'H' },
    { name: 'CSS', level: 'Experienced', icon: 'C' },
    { name: 'JavaScript', level: 'Basic', icon: 'JS' },
    { name: 'TypeScript', level: 'Basic', icon: 'TS' }
  ];

  const backendSkills = [
    { name: 'PostgreSQL', level: 'Basic', icon: 'PG' },
    { name: 'Node JS', level: 'Intermediate', icon: 'N' },
    { name: 'Express JS', level: 'Intermediate', icon: 'E' },
    { name: 'Git', level: 'Intermediate', icon: 'G' },
    { name: 'Python', level: 'Experienced', icon: 'PY' },
    { name: 'C++', level: 'Experienced', icon: 'C++' },
    { name: 'Java', level: 'Experienced', icon: 'J' },
    { name: 'C', level: 'Experienced', icon: 'C' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <ExperienceSection id="experience" ref={ref}>
      <ExperienceContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <SectionHeader variants={itemVariants}>
          <SectionSubtitle variants={itemVariants}>
            Explore My
          </SectionSubtitle>
          <SectionTitle variants={itemVariants}>
            Experience
          </SectionTitle>
        </SectionHeader>

        <SkillsGrid>
          <SkillCategory
            variants={categoryVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <CategoryTitle>Frontend Development</CategoryTitle>
            <SkillsContainer>
              {frontendSkills.map((skill, index) => (
                <SkillBubble
                  key={skill.name}
                  skillLevel={skill.level}
                  variants={skillVariants}
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SkillIcon skillLevel={skill.level}>
                    {skill.icon}
                  </SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel skillLevel={skill.level}>
                    {skill.level}
                  </SkillLevel>
                </SkillBubble>
              ))}
            </SkillsContainer>
          </SkillCategory>

          <SkillCategory
            variants={categoryVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <CategoryTitle>Backend Development</CategoryTitle>
            <SkillsContainer>
              {backendSkills.map((skill, index) => (
                <SkillBubble
                  key={skill.name}
                  skillLevel={skill.level}
                  variants={skillVariants}
                  whileHover={{
                    scale: 1.05,
                    rotate: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SkillIcon skillLevel={skill.level}>
                    {skill.icon}
                  </SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel skillLevel={skill.level}>
                    {skill.level}
                  </SkillLevel>
                </SkillBubble>
              ))}
            </SkillsContainer>
          </SkillCategory>
        </SkillsGrid>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;