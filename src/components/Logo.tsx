import styled from "styled-components";

const StyledLogo = styled.a`
  display: flex;
  cursor: pointer;
  font-size: 4rem;
  font-weight: 600;

  :hover {
    text-decoration: none;
  }
`;

const Logo = () => {
  return <StyledLogo href="/">Akula</StyledLogo>;
};

export default Logo;
