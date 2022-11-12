import styled from "styled-components";
import { DOCS_LINK } from "../lib/links";
import Header from "./Header";
import Terminal from "./Terminal";

const terminalContent: string[] = [
  "user@ubuntu:~$ git clone https://github.com/akula-bft/akula",
  "Cloning into 'akula'...",
  "remote: Enumerating objects: 8019, done.",
  "remote: Counting objects: 100% (259/259), done.",
  "remote: Compressing objects: 100% (126/126), done.",
  "remote: Total 8019 (delta 150), reused 211 (delta 125), pack-reused 7760",
  "Receiving objects: 100% (8019/8019), 8.86 MiB | 6.76 MiB/s, done.",
  "Resolving deltas: 100% (5590/5590), done.",
  "user@ubuntu:~$ cd akula",
  "user@ubuntu:~/akula$ cargo build --all --profile=production",
  "    Updating git repository `https://github.com/vorot93/arrayvec`",
  "    Updating git repository `https://github.com/vorot93/ethnum-rs`",
  "    Updating git repository `https://github.com/vorot93/bytes-literal`",
  "    Updating git repository `https://github.com/saulius/croaring-rs`",
  "    Updating git submodule `https://github.com/lemire/CRoaringUnityBuild`",
  "    Updating git repository `https://github.com/ledgerwatch/interfaces`",
  "    Updating git repository `https://github.com/vorot93/ethereum-jsonrpc`",
  "    Updating git repository `https://github.com/vorot93/rust-i256`",
  "    Updating git repository `https://github.com/stevefan1999-personal/rust-igd`",
  "    Updating git repository `https://github.com/vorot93/task-group`",
  "    Updating git repository `https://github.com/michaellass/e2p-fileflags`",
  "    Updating git repository `https://github.com/michaellass/e2p-sys.git`",
  "  Downloaded wildmatch v1.1.0",
  "  Downloaded indexmap v1.9.1",
];

const StyledHero = styled.div`
  display: flex;
  width: 100%;
  font-size: 2rem;
  flex-direction: column;
  align-items: center;

  padding: 0 14rem;
  padding-top: 5rem;
  @media (max-width: 1367px) {
    padding: 0 10rem;
    padding-top: 5rem;
  }
  @media (max-width: 768px) {
    padding: 0 3rem;
    padding-top: 2rem;
  }
`;

const Gradients = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  filter: blur(250px) saturate(1.15);
  @media (max-width: 768px) {
    filter: blur(130px) saturate(1.15);
    transform: translateY(-4rem);
  }
`;

const BottomLeftGradient = styled.div`
  position: absolute;
  border-radius: 50%;
  bottom: -10%;
  left: -5%;
  width: 35%;
  height: 60%;
  background: var(--third);
`;

const RightGradient = styled.div`
  position: absolute;
  border-radius: 50%;
  right: -8%;
  bottom: 50%;
  transform: translateY(50%);
  height: 40%;
  width: 30%;
  background: var(--first);
`;

const BottomRightGradient = styled.div`
  position: absolute;
  border-radius: 50%;
  bottom: -10%;
  right: 13%;
  width: 35%;
  height: 30%;
  background: var(--second);
`;

const HeroText = styled.h1`
  position: relative;
  font-weight: 600;
  text-align: center;
  max-width: 90rem;

  font-size: 9.6rem;
  margin-top: 12rem;
  @media (max-width: 768px) {
    font-size: 6rem;
    margin-top: 6rem;
  }
`;

const GradientText = styled.span`
  position: relative;
  font-weight: 600;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 9.6rem;
  @media (max-width: 768px) {
    font-size: 7rem;
  }
`;

const HeroSubText = styled.h3`
  position: relative;
  color: var(--sub);
  text-align: center;
  font-weight: 400;
  max-width: 60rem;

  font-size: 2.3rem;
  margin-top: 2rem;
  line-height: 1.4;
  @media (max-width: 768px) {
    font-size: 1.9rem;
    margin-top: 2rem;
    line-height: 1.3;
  }
`;

const Button = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  background: var(--gradient);
  border-radius: 1.4rem;
  font-weight: 500;
  cursor: pointer;

  font-size: 2.2rem;
  padding: 1.9rem 3.1rem;
  margin-top: 6rem;
  @media (max-width: 768px) {
    font-size: 1.9rem;
    padding: 1.8rem 2.9rem;
    margin-top: 5rem;
  }
`;

const TerminalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 62rem;
  max-width: 120rem;

  width: 66vw;
  height: 34.6vw;
  margin-top: 13rem;
  @media (max-width: 768px) {
    width: 100%;
    height: 60vw;
    margin-top: 8rem;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <Gradients>
        <BottomLeftGradient />
        <RightGradient />
        <BottomRightGradient />
      </Gradients>
      <Header />
      <HeroText>
        The Worlds <GradientText>Fastest </GradientText> Ethereum Client
      </HeroText>
      <HeroSubText>
        Akula is written in Rust, it supports Faster sync speeds, crash
        resilience and a historical state API
      </HeroSubText>
      <Button href={DOCS_LINK} target="_blank">
        View the docs →
      </Button>
      <TerminalContainer>
        <Terminal code={terminalContent} />
      </TerminalContainer>
    </StyledHero>
  );
};

export default Hero;
