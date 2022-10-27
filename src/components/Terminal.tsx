import styled from "styled-components";

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

const StyledTerminal = styled.div`
  display: flex;
  width: 66%;
  border: solid 1px green;
  border-radius: 1.5rem;
  flex-direction: column;

  border: 2px solid transparent;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-image: linear-gradient(var(--terminal), var(--terminal)),
    var(--gradient);
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
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
  font-size: 1.6rem;
  color: var(--sub);
  font-family: "Roboto Mono", monospace;
  margin-bottom: 1px;
`;

const Terminal = () => {
  return (
    <StyledTerminal>
      <Header>Bash</Header>
      <Line />
      <Content>
        {terminalContent.map((line, index) => (
          <ContentLine key={index}>{line}</ContentLine>
        ))}
      </Content>
    </StyledTerminal>
  );
};

export default Terminal;
