import styled from "styled-components";
import Header from "./Header";
import Terminal from "./Terminal";

const StyledHero = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  flex-direction: column;
  padding: 0 14rem;
  padding-top: 5rem;
  align-items: center;
  margin-bottom: 31rem;
`;

const Gradients = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(250px) saturate(1.15);
`;

const BottomLeftGradient = styled.div`
  position: absolute;
  border-radius: 50%;
  bottom: -10%;
  left: -5%;
  width: 35%;
  height: 60%;
  background: var(--third);
`;

const RightGradient = styled.div`
  position: absolute;
  border-radius: 50%;
  right: -8%;
  bottom: 50%;
  transform: translateY(50%);
  height: 40%;
  width: 30%;
  background: var(--first);
`;

const BottomRightGradient = styled.div`
  position: absolute;
  border-radius: 50%;
  bottom: -10%;
  right: 13%;
  width: 35%;
  height: 30%;
  background: var(--second);
`;

const HeroText = styled.h1`
  position: relative;
  font-size: 9.6rem;
  font-weight: 600;
  text-align: center;
  max-width: 90rem;
  margin-top: 10rem;
`;

const HeroSubText = styled.h3`
  position: relative;
  font-size: 2.4rem;
  color: var(--sub);
  text-align: center;
  font-weight: 500;
  margin-top: 2rem;
  max-width: 60rem;
`;

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  background: var(--gradient);
  border-radius: 1.4rem;
  padding: 2.1rem 3.3rem;
  font-size: 2.4rem;
  margin-top: 5rem;
`;

const GradientText = styled.span`
  position: relative;
  font-size: 9.6rem;
  font-weight: 600;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TerminalContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hero = () => {
  return (
    <StyledHero>
      <Gradients>
        <BottomLeftGradient />
        <RightGradient />
        <BottomRightGradient />
      </Gradients>
      <Header />
      <HeroText>
        The Worlds <GradientText>Fastest </GradientText> Ethereum Client
      </HeroText>
      <HeroSubText>
        Akula is written in Rust, it supports Faster sync speeds, crash
        resilience and a historical state API
      </HeroSubText>
      <Button>View the docs →</Button>
      <TerminalContainer>
        <Terminal />
      </TerminalContainer>
    </StyledHero>
  );
};

export default Hero;
