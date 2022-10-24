import styled from "styled-components";
import Section from "./Section";

const StyledSupportedBy = styled.div`
  display: flex;
  font-size: 2rem;
`;

const SupportedBy = () => {
  return (
    <Section id="supported-by" header="Supported By">
      <StyledSupportedBy>
        Gnosis, Stateful Works, 1Inch, Gitcoin
      </StyledSupportedBy>
    </Section>
  );
};

export default SupportedBy;
