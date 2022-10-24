import styled from "styled-components";

interface NavItemType {
  name: string;
  link: string;
}

const navItems: NavItemType[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const StyledNavItems = styled.div`
  display: flex;
`;

const NavItem = styled.button`
  font-size: 1.5rem;
  margin: 0 1rem;
  cursor: pointer;
`;

const NavItems = () => {
  return (
    <StyledNavItems>
      {navItems.map((item, index) => {
        return <NavItem key={index}>{item.name} </NavItem>;
      })}
    </StyledNavItems>
  );
};

export default NavItems;
