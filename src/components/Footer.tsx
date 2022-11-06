import styled from "styled-components";
import Logo from "./Logo";
import Socials from "./Socials";

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  padding: 0 14rem;
  padding-bottom: 5rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <Socials />
    </StyledFooter>
  );
};

export default Footer;
