import styled from "styled-components";
import Section from "./Section";

const StyledPerformance = styled.div`
  display: flex;
  font-size: 2rem;
`;

const Performance = () => {
  return (
    <Section header="Performance">
      <StyledPerformance>
        Some metrics laid out nicely, maybe Erigon comparison
      </StyledPerformance>
      ;
    </Section>
  );
};

export default Performance;
