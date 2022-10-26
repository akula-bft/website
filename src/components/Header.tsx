import styled from "styled-components";
import Logo from "./Logo";
import NavItems from "./NavItems";
import Socials from "./Socials";

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 2rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <NavItems />
      <Socials />
    </StyledHeader>
  );
};

export default Header;
