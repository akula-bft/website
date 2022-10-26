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
    name: "Networks",
    component: "networks",
  },
  {
    name: "Supported By",
    component: "supported-by",
  },
];

const StyledNavItems = styled.div`
  display: flex;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
`;

const NavItem = styled.button`
  font-size: 2rem;
  margin: 0 1.2rem;
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
