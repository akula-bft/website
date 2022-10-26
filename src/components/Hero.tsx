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
`;

const Hero = () => {
  return (
    <StyledHero>
      <Header />
      The name, a description, a button to the docs, some interesting
      illustration or something
    </StyledHero>
  );
};

export default Hero;
