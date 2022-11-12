import styled from "styled-components";
import Section from "./Section";

import gnosis from "../assets/supporters/gnosis.svg";
import inch from "../assets/supporters/1inch.svg";
import gitcoin from "../assets/supporters/gitcoin.svg";
import stateful from "../assets/supporters/stateful.svg";

interface ProtocolType {
  logo: string;
  name: string;
  link: string;
}

const protocols: ProtocolType[] = [
  {
    logo: gnosis,
    name: "Gnosis",
    link: "https://gnosis.io/",
  },
  {
    logo: stateful,
    name: "Stateful Works",
    link: "https://stateful.mirror.xyz/",
  },
  {
    logo: inch,
    name: "1inch",
    link: "https://1inch.io/",
  },
  {
    logo: gitcoin,
    name: "Gitcoin",
    link: "https://gitcoin.co/",
  },
];

const StyledSupporters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 14rem;
  width: 100%;
`;

const Description = styled.p`
  font-size: 2.2rem;
  font-weight: 500;
  text-align: center;
  max-width: 66rem;
  margin-bottom: 8rem;
  margin-top: 1.5rem;
  line-height: 1.4;
`;

const Link = styled.a`
  font-size: 2.2rem;
  font-weight: 500;
  text-decoration: underline;
`;

const List = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

const Protocol = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 14rem;
`;

const Name = styled.div`
  margin-top: 2.6rem;
  font-size: 2.8rem;
  text-transform: uppercase;
  font-weight: 500;
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
