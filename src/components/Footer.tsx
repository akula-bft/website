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
  margin-bottom: 5rem;
  margin-top: 5rem;

  padding: 0 14rem;
  @media (max-width: 1367px) {
    padding: 0 10rem;
  }
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
