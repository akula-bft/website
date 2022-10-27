import styled from "styled-components";

const StyledSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h2`
  font-size: 9.6rem;
  font-weight: 500;
  margin-bottom: 8rem;
  margin-top: 20rem;
`;

interface Props {
  children: React.ReactNode;
  id: string;
  header: string;
}

const Section = ({ id, children, header }: Props) => {
  return (
    <StyledSection id={id}>
      <Header>{header}</Header>
      {children}
    </StyledSection>
  );
};

export default Section;
