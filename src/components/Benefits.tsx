import styled from "styled-components";
import Section from "./Section";

const StyledBenefits = styled.div`
  display: flex;
  font-size: 2rem;
`;

const Benefits = () => {
  return (
    <Section id="benefits" header="Benefits">
      <StyledBenefits>
        Much lower disk footprint, Faster sync speed, Crash resilience,
        Extremely fast historical RPC queries
      </StyledBenefits>
    </Section>
  );
};

export default Benefits;
