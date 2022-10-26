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
  text-align: center;
  max-width: 90rem;
  margin-top: 10rem;
  font-weight: 600;
`;

const Hero = () => {
  return (
    <StyledHero>
      <Header />
      <HeroText>The Worlds Fastest Ethereum Client</HeroText>
      The name, a description, a button to the docs, some interesting
      illustration or something
    </StyledHero>
  );
};

export default Hero;
