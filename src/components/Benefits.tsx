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
    header: "Lower disk footprint",
    subheader:
      "A new Ethereum state storage model resulting in <3TB for an archive node.",
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
    header: "Historical state API",
    subheader:
      "Supports extremely fast historical RPC queries like eth_call and trace_call.",
  },
];

const StyledBenefits = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
  grid-gap: 3rem;
  align-items: center;
  justify-content: space-evenly;
  font-size: 2rem;
  width: 100%;

  padding: 0 14rem;
  @media (max-width: 1367px) {
    padding: 0 10rem;
  }
  @media (max-width: 768px) {
    padding: 0 3rem;
  }
`;

const Benefit = styled.div`
  width: 100%;
  background: var(--terminal);
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  padding: 3.8rem 2.4rem;
  @media (max-width: 1367px) {
    padding: 2rem 2rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px rgba(255, 255, 255, 0.4);
  border-radius: 2rem;
  width: 7.5rem;
  height: 7.5rem;
`;

const Icon = styled.img`
  max-height: 4.2rem;
  max-width: 4.2rem;
`;

const Header = styled.h4`
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;

  font-size: 2.3rem;
  margin-top: 3.2rem;
  @media (max-width: 1367px) {
    font-size: 2rem;
    margin-top: 2.8rem;
  }
`;

const Description = styled.p`
  width: 100%;
  color: var(--sub);
  font-weight: 400;
  text-align: center;
  margin-top: 0.8rem;

  font-size: 1.6rem;
  @media (max-width: 1367px) {
    font-size: 1.4rem;
  }
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
