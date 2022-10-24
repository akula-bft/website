import styled from "styled-components";

const StyledHero = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  border: solid 1px blue;
  font-size: 2rem;
  padding: 1rem;
`;

const Hero = () => {
  return (
    <StyledHero>
      The name, a description, a button to the docs, some interesting
      illustration or something
    </StyledHero>
  );
};

export default Hero;
