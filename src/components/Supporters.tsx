import styled from "styled-components";
import Section from "./Section";

import gnosis from "../assets/supporters/gnosis.svg";
import stateful from "../assets/supporters/stateful.svg";
import binance from "../assets/supporters/binance.svg";
import inch from "../assets/supporters/1inch.svg";

interface ProtocolType {
  logo: string;
  name: string;
  link: string;
}

const protocols: ProtocolType[] = [
  {
    logo: gnosis,
    name: "Gnosis",
    link: "https://gnosis.io",
  },
  {
    logo: stateful,
    name: "Stateful Works",
    link: "https://stateful.mirror.xyz",
  },
  {
    logo: binance,
    name: "Binance",
    link: "https://binance.com",
  },
  {
    logo: inch,
    name: "1inch",
    link: "https://1inch.io",
  },
];

const StyledSupporters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding: 0 14rem;
  @media (max-width: 1367px) {
    padding: 0 10rem;
  }
  @media (max-width: 768px) {
    padding: 0 5rem;
  }
`;

const Description = styled.p`
  font-weight: 500;
  text-align: center;
  max-width: 66rem;

  margin-top: 1.5rem;
  line-height: 1.4;
  font-size: 2.2rem;
  margin-bottom: 8rem;
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    line-height: 1.3;
    font-size: 1.8rem;
    margin-bottom: 5rem;
  }
`;

const Link = styled.a`
  font-weight: 500;
  text-decoration: underline;

  font-size: 2.2rem;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const List = styled.div`
  display: grid;
  width: 100%;
  max-width: 120rem;
  align-items: center;
  justify-content: space-evenly;

  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 6rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 3rem;
  }
`;

const Protocol = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 14rem;
  @media (max-width: 768px) {
    height: 9rem;
  }
`;

const Name = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;

  margin-top: 2.6rem;
  font-size: 2.8rem;
  @media (max-width: 768px) {
    margin-top: 2rem;
    font-size: 1.8rem;
    white-space: nowrap;
  }
`;

const Supporters = () => {
  return (
    <Section highlight noSpacing id="supported-by" header="Supporters">
      <StyledSupporters>
        <Description>
          Work on Akula is made possible by our amazing supporters. If you would
          like to sponsor, check out our{" "}
          <Link href="https://gitcoin.co/grants/5933/akula" target="_blank">
            Gitcoin grant page
          </Link>
          .
        </Description>
        <List>
          {protocols.map((protocol) => (
            <Protocol key={protocol.name} href={protocol.link} target="_blank">
              <Logo src={protocol.logo} alt={`${protocol.name} Logo`} />
              <Name>{protocol.name}</Name>
            </Protocol>
          ))}
        </List>
      </StyledSupporters>
    </Section>
  );
};

export default Supporters;
