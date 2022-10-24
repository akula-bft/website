import styled from "styled-components";
import Logo from "./Logo";
import Socials from "./Socials";

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 1px red;
  padding: 1rem;
  width: 100%;
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
