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
  height: ${(props: TerminalProps) => (props.small ? "4rem" : "5rem")};
  color: var(--sub);
  font-size: 1.8rem;
  font-family: "Ubuntu", sans-serif;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: var(--gradient);
`;

const Content = styled.div`
  width: 100%;
  padding: 1rem 1.7rem;
  display: flex;
  flex-direction: column;
`;

const ContentLine = styled.div`
  width: 100%;
  font-size: ${(props: TerminalProps) => (props.small ? "1.4rem" : "1.6rem")};
  color: var(--sub);
  font-family: "Roboto Mono", monospace;
  margin-bottom: 1px;
`;

const Controls = styled.img`
  position: absolute;
  top: 50%;
  right: 1.7rem;
  transform: translateY(-50%);
  height: 1.4rem;
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
        <Controls src={controls} alt="Terminal Controls" />
      </Header>
      <Line />
      <Content>
        {code.map((line, index) => (
          <ContentLine small={small} key={index}>
            {line}
          </ContentLine>
        ))}
      </Content>
    </StyledTerminal>
  );
};

export default Terminal;
