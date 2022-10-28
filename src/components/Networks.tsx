import styled from "styled-components";
import Section from "./Section";

const networks: string[] = [
  "Mainnet",
  "Sepolia",
  "Goerli",
  "Ropsten",
  "Rinkeby",
  "+ Custom networks",
];

const StyledNetworks = styled.div`
  width: 100%;
  row-gap: 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: 2rem;
  padding: 0 14rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Network = styled.div`
  background: var(--terminal);
  border-radius: 1.5rem;
  height: 9rem;
  font-size: 2.2rem;
  width: 26rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

const Networks = () => {
  return (
    <Section id="networks" header="Networks">
      <StyledNetworks>
        {networks.map((network, index) => (
          <Container key={index}>
            <Network>{network}</Network>
          </Container>
        ))}
      </StyledNetworks>
    </Section>
  );
};

export default Networks;
