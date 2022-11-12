import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Section from "./Section";

import copy from "../assets/ui/copy.svg";
import { useState } from "react";

const CODE = `git clone https://github.com/akula-bft/akula\n\ncd akula\n\ncargo build --all --profile=production`;

const Container = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledGetStarted = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  border-radius: 10px;
  padding: 1.5rem 1.5rem;
  padding-right: 6rem;

  border: 2px solid transparent;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-image: linear-gradient(var(--terminal), var(--terminal)),
    var(--gradient);
`;

const Line = styled.div`
  width: 100%;
  font-size: 1.4rem;
  color: var(--sub);
  font-family: "Roboto Mono", monospace;
  margin-bottom: 1px;
`;

interface CopyProps {
  open: boolean;
}

const Copy = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  cursor: pointer;
  padding: 0.3rem;
  border-radius: 4px;

  transition: opacity 0.2s;
  opacity: ${(props: CopyProps) => (props.open ? 1 : 0)};
`;

const CopyImage = styled.img`
  width: 2rem;
  height: 2rem;
`;

const GetStarted = () => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Section header="Get Started" id="get-started">
        <StyledGetStarted
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {CODE.split("\n\n").map((c: string, index: number) => (
            <Line key={index}>{c}</Line>
          ))}
          <CopyToClipboard text={CODE}>
            <Copy open={show}>
              <CopyImage src={copy} alt="Copy" />
            </Copy>
          </CopyToClipboard>
        </StyledGetStarted>
      </Section>
    </Container>
  );
};

export default GetStarted;
