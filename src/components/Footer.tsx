import styled from "styled-components";
import FooterLink from "./FooterLink";
import Logo from "./Logo";
import Socials from "./Socials";

const StyledFooter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  width: 100%;
  padding: 0 14rem;
  margin-bottom: 5rem;
  margin-top: 5rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <FooterLink />
      <Socials />
    </StyledFooter>
  );
};

export default Footer;
