import styled from "styled-components";

const StyledLogo = styled.a`
  display: flex;
  cursor: pointer;
  font-weight: 600;

  :hover {
    text-decoration: none;
  }

  font-size: 4rem;
  @media (max-width: 768px) {
    font-size: 3.4rem;
  }
`;

const Logo = () => {
  return <StyledLogo href="/">Akula</StyledLogo>;
};

export default Logo;
