import styled from "styled-components";
import Section from "./Section";

import api from "../assets/benefits/api.svg";
import crash from "../assets/benefits/crash.svg";
import disk from "../assets/benefits/disk.svg";
import speed from "../assets/benefits/speed.svg";

interface BenefitType {
  icon: string;
  header: string;
  subheader: string;
}

const benefits: BenefitType[] = [
  {
    icon: disk,
    header: "lower disk footprint",
    subheader:
      "A new Ethereum state storage model resulting in <3TB for an  archive node and <900GB for a pruned node.",
  },
  {
    icon: speed,
    header: "Faster sync speed",
    subheader:
      "An archive full validation node can be bootstrapped in under 3 days and can even be run on an HDD.",
  },
  {
    icon: crash,
    header: "Crash resilience",
    subheader:
      "Resilient database that will persist state through a forceful shutdown or power failure.",
  },
  {
    icon: api,
    header: "historical state API",
    subheader:
      "Supports extremely fast historical RPC queries like eth_call and trace_call.",
  },
];

const StyledBenefits = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
  align-items: center;
  justify-content: space-evenly;
  font-size: 2rem;
  padding: 0 14rem;
  width: 100%;
`;

const Benefit = styled.div`
  width: 100%;
  background: var(--terminal);
  padding: 3.8rem 2.4rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px var(--main);
  border-radius: 2rem;
  width: 7.5rem;
  height: 7.5rem;
`;

const Icon = styled.img`
  max-height: 4.2rem;
  max-width: 4.2rem;
`;

const Header = styled.h4`
  font-size: 2.3rem;
  text-transform: uppercase;
  font-weight: 400;
  margin-top: 3.2rem;
`;

const Description = styled.p`
  width: 100%;
  font-size: 1.6rem;
  color: var(--sub);
  font-weight: 400;
  text-align: center;
  margin-top: 0.8rem;
`;

const Benefits = () => {
  return (
    <Section id="benefits" header="Benefits">
      <StyledBenefits>
        {benefits.map((benefit: BenefitType) => (
          <Benefit key={benefit.header}>
            <IconContainer>
              <Icon src={benefit.icon} alt={`${benefit.header} Icon`} />
            </IconContainer>
            <Header>{benefit.header}</Header>
            <Description>{benefit.subheader}</Description>
          </Benefit>
        ))}
      </StyledBenefits>
    </Section>
  );
};

export default Benefits;
