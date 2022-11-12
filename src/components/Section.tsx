import styled from "styled-components";

interface SectionProps {
  highlight?: boolean;
  noSpacing?: boolean;
}

const StyledSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: ${(props: SectionProps) =>
    props.highlight ? "var(--gradient)" : "var(--bg)"};

  padding: 10rem 0;
  @media (max-width: 768px) {
    padding: 7rem 0;
  }
`;

const Header = styled.h2`
  font-weight: 500;

  font-size: 7.5rem;
  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  margin-top: ${(props: SectionProps) => (props.noSpacing ? "0" : "7rem")};
  @media (max-width: 768px) {
    margin-top: ${(props: SectionProps) => (props.noSpacing ? "0" : "4rem")};
  }
`;

interface Props {
  children: React.ReactNode;
  id: string;
  header: string;
  noSpacing?: boolean;
  highlight?: boolean;
}

const Section = ({ id, children, header, noSpacing, highlight }: Props) => {
  return (
    <StyledSection id={id} highlight={highlight}>
      <Header>{header}</Header>
      <Content noSpacing={noSpacing}>{children}</Content>
    </StyledSection>
  );
};

export default Section;
