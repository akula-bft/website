import styled from "styled-components";

interface SectionProps {
  highlight: boolean;
}

const StyledSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: ${(props: SectionProps) =>
    props.highlight ? "var(--gradient)" : "var(--bg)"};
  padding: 10rem 0;
`;

const Header = styled.h2`
  font-size: 9.6rem;
  font-weight: 500;
  margin-bottom: 8rem;
`;

interface Props {
  children: React.ReactNode;
  id: string;
  header: string;
  highlight?: boolean;
}

const Section = ({ id, children, header, highlight }: Props) => {
  return (
    <StyledSection id={id} highlight={highlight!!}>
      <Header>{header}</Header>
      {children}
    </StyledSection>
  );
};

export default Section;
