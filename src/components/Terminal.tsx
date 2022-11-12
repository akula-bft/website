import styled from "styled-components";

import controls from "../assets/terminal/controls.svg";

interface TerminalProps {
  small?: boolean;
}

const StyledTerminal = styled.div`
  display: flex;
  border: solid 1px green;
  border-radius: 1.5rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;

  border: 2px solid transparent;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-image: linear-gradient(var(--terminal), var(--terminal)),
    var(--gradient);
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--sub);
  font-family: "Ubuntu", sans-serif;

  height: ${(props: TerminalProps) => (props.small ? "4rem" : "4.5rem")};
  font-size: ${(props: TerminalProps) => (props.small ? "1.6rem" : "1.8rem")};
  @media (max-width: 768px) {
    height: ${(props: TerminalProps) => (props.small ? "4rem" : "3rem")};
    font-size: ${(props: TerminalProps) => (props.small ? "1.6rem" : "1.4rem")};
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: var(--gradient);
`;

const Content = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  padding: 1rem 1.7rem;
  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
  }
`;

const ContentBottomCover = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  background: var(--terminal);
`;

const ContentLine = styled.div`
  width: 100%;
  color: var(--sub);
  font-family: "Roboto Mono", monospace;

  font-size: ${(props: TerminalProps) => (props.small ? "1.4rem" : "1.6rem")};
  margin-bottom: 1px;
  @media (max-width: 768px) {
    font-size: ${(props: TerminalProps) => (props.small ? "1.4rem" : "1.1rem")};
    margin-bottom: 1px;
  }
`;

const Controls = styled.img`
  position: absolute;
  top: 50%;
  right: 1.7rem;
  transform: translateY(-50%);

  height: ${(props: TerminalProps) => (props.small ? "1.4rem" : "1.5rem")};
  @media (max-width: 768px) {
    height: ${(props: TerminalProps) => (props.small ? "1.4rem" : "1.3rem")};
  }
`;

interface Props {
  code: string[];
  small?: boolean;
}

const Terminal = ({ code, small }: Props) => {
  return (
    <StyledTerminal>
      <Header small={small}>
        Bash
        <Controls small={small} src={controls} alt="Terminal Controls" />
      </Header>
      <Line />
      <Content>
        {code.map((line, index) => (
          <ContentLine small={small} key={index}>
            {line}
          </ContentLine>
        ))}
        <ContentBottomCover />
      </Content>
    </StyledTerminal>
  );
};

export default Terminal;
