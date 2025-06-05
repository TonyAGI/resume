import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const AboutContainer = styled.div`
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: relative;
`;

const ProfileImageWrapper = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  border-radius: 30px;
  padding: 4px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 26px;
  background: #f0f0f0;
`;

const ContentSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

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

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`;

const StatTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
`;

const StatDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.5;
`;

const TextCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const TextContent = styled.div`
  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.05rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

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

  return (
    <AboutSection id="about" ref={ref}>
      <AboutContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <SectionHeader variants={itemVariants}>
          <SectionSubtitle variants={itemVariants}>
            Get To Know More
          </SectionSubtitle>
          <SectionTitle variants={itemVariants}>
            About Me
          </SectionTitle>
        </SectionHeader>

        <ContentGrid>
          <ImageContainer variants={itemVariants}>
            <ProfileImageWrapper
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
            >
              <ProfileImage 
                src="/about-pic.png" 
                alt="Tony Oganda Profile"
                onError={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
                }}
              />
            </ProfileImageWrapper>
          </ImageContainer>

          <ContentSection variants={itemVariants}>
            <StatsContainer>
              <StatCard
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <StatIcon>
                  ⚡
                </StatIcon>
                <StatTitle>Experience</StatTitle>
                <StatDescription>
                  2+ years<br />
                  Frontend Development
                </StatDescription>
              </StatCard>

              <StatCard
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <StatIcon>
                  🎓
                </StatIcon>
                <StatTitle>Education</StatTitle>
                <StatDescription>
                  B.Sc. Bachelors Degree<br />
                  2024-2027
                </StatDescription>
              </StatCard>
            </StatsContainer>

            <TextCard
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <TextContent>
                <p>
                  From the magic of Google search to the nerve-racking loading screen, technology became exciting to me. With technology shown to improve year by year, new inventions from the internet to artificial intelligence have changed the way our society interacts globally. A change in components smaller than ants can alter how efficient our devices work.
                </p>
                <p>
                  Computer Science is about how far circuits and programming go before they can be efficient enough to power our universe. My life has changed with this invention, often struggling in multiple subjects without an opportunity for tutoring. Having the internet made me learn of educational websites like Khan Academy, a free non-profit organization aimed at decentralizing learning. Through the internet, I was able to learn tips and tricks from how to shade colors, to learning derivation and integration.
                </p>
                <p>
                  Throughout the process, I learned how important critical thinking and leadership skills are to me. My interest in technology has grown with me with time. As I continue to learn and explore the field of engineering, I am constantly reminded of the endless possibilities technology provides. With Computer Science, I am determined to use my mathematical skills to make a positive impact on society. And I am confident that with hard work and dedication, I can achieve it one day.
                </p>
              </TextContent>
            </TextCard>
          </ContentSection>
        </ContentGrid>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;