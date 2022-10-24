import styled from "styled-components";

const StyledSection = styled.div`
  display: flex;
  width: 100%;
  padding: 10rem 0;
  border: solid 1px pink;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h2`
  font-size: 4rem;
  margin-bottom: 4rem;
`;

interface Props {
  children: React.ReactNode;
  header: string;
}

const Section = ({ children, header }: Props) => {
  return (
    <StyledSection>
      <Header>{header}</Header>
      {children}
    </StyledSection>
  );
};

export default Section;