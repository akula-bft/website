import styled from "styled-components";
import Section from "./Section";

interface NetworkType {
  name: string;
  color: string;
}

const networks: NetworkType[] = [
  {
    name: "Mainnet",
    color: "#2AB5AF",
  },
  {
    name: "Sepolia",
    color: "#CFB5F0",
  },
  {
    name: "Goerli",
    color: "#2E99F2",
  },
  {
    name: "Ropsten",
    color: "#FF488D",
  },
  {
    name: "Rinkeby",
    color: "#F6C441",
  },
  {
    name: "+ Custom",
    color: "#BBC0C4",
  },
];

const StyledNetworks = styled.div`
  row-gap: 10rem;
  display: grid;
  width: 100%;
  font-size: 2rem;

  padding: 0 14rem;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-gap: 4rem;
  @media (max-width: 1367px) {
    padding: 0 10rem;
  }
  @media (max-width: 768px) {
    padding: 0 3rem;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ColorProps {
  color: string;
}

const NetworkColor = styled.div`
  border-radius: 50%;
  background: ${(props: ColorProps) => props.color};
  height: 1.3rem;
  width: 1.3rem;
  margin-right: 1.3rem;
`;

const Network = styled.div`
  background: var(--terminal);
  border-radius: 1.5rem;
  height: 6.5rem;
  font-size: 1.8rem;
  width: 17rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

const Networks = () => {
  return (
    <Section id="networks" header="Networks">
      <StyledNetworks>
        {networks.map((network: NetworkType) => (
          <Container key={network.name}>
            <Network>
              <NetworkColor color={network.color} />
              {network.name}
            </Network>
          </Container>
        ))}
      </StyledNetworks>
    </Section>
  );
};

export default Networks;
