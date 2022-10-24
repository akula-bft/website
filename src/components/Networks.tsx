import styled from "styled-components";
import Section from "./Section";

const StyledNetworks = styled.div`
  display: flex;
  font-size: 2rem;
`;

const Networks = () => {
  return (
    <Section header="Supported Networks">
      <StyledNetworks>
        Ethereum, Sepolia, Goerli, Ropsten, Rinkeby
      </StyledNetworks>
    </Section>
  );
};

export default Networks;
