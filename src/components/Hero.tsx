import styled from "styled-components";
import Header from "./Header";

const StyledHero = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  flex-direction: column;
  padding: 0 14rem;
  padding-top: 5rem;
  align-items: center;
`;

const HeroText = styled.h1`
  font-size: 9.6rem;
  font-weight: 600;
  text-align: center;
  max-width: 90rem;
  margin-top: 10rem;
`;

const HeroSubText = styled.h3`
  font-size: 2.4rem;
  color: var(--sub);
  text-align: center;
  font-weight: 500;
  margin-top: 2rem;
  max-width: 60rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background: var(--gradient);
  border-radius: 1.4rem;
  padding: 2.1rem 3.3rem;
  font-size: 2.4rem;
  margin-top: 5rem;
`;

const GradientText = styled.span`
  font-size: 9.6rem;
  font-weight: 600;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Hero = () => {
  return (
    <StyledHero>
      <Header />
      <HeroText>
        The Worlds <GradientText>Fastest </GradientText> Ethereum Client
      </HeroText>
      <HeroSubText>
        Akula is written in Rust, it supports Faster sync speeds, crash
        resilience and a historical state API
      </HeroSubText>
      <Button>View the docs →</Button>
    </StyledHero>
  );
};

export default Hero;
