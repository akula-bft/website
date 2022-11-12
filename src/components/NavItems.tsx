import { Link } from "react-scroll";
import styled from "styled-components";

interface NavItemType {
  name: string;
  component: string;
}

const navItems: NavItemType[] = [
  {
    name: "Benefits",
    component: "benefits",
  },
  {
    name: "Performance",
    component: "performance",
  },
  {
    name: "Supporters",
    component: "supported-by",
  },
  {
    name: "Networks",
    component: "networks",
  },
];

const StyledNavItems = styled.div`
  display: flex;
  position: absolute;
  right: 50%;
  transform: translateX(50%);

  @media (max-width: 1090px) {
    display: none;
  }
`;

const NavItem = styled.button`
  font-size: 1.8rem;
  margin: 0 2.3rem;
  cursor: pointer;
  color: var(--sub);

  transition: color 0.3s ease-in-out;
  :hover {
    color: var(--main);
  }
`;

const NavItems = () => {
  return (
    <StyledNavItems>
      {navItems.map((item, index) => {
        return (
          <Link
            spy
            smooth
            key={item.name}
            to={item.component}
            offset={0}
            duration={600}
          >
            <NavItem key={index}>{item.name} </NavItem>
          </Link>
        );
      })}
    </StyledNavItems>
  );
};

export default NavItems;
