import styled from "styled-components";
import Section from "./Section";
import Terminal from "./Terminal";

const terminalContent: string[] = [
  "Executed block 9032056, Mgas/sec: 1474.06, progress: 37.20%, 10:21:55 remaining",
  "Executed block 9036893, Mgas/sec: 1284.39, progress: 37.24%, 10:21:39 remaining",
  "Executed block 9042293, Mgas/sec: 1410.54, progress: 37.29%, 10:21:15 remaining",
  "Executed block 9047738, Mgas/sec: 1410.75, progress: 37.34%, 10:20:52 remaining",
  "Executed block 9052664, Mgas/sec: 1349.49, progress: 37.38%, 10:20:32 remaining",
  "Executed block 9057169, Mgas/sec: 1081.01, progress: 37.42%, 10:20:26 remaining",
  "Executed block 9063709, Mgas/sec: 1327.79, progress: 37.46%, 10:20:07 remaining",
  "Executed block 9070514, Mgas/sec: 1403.77, progress: 37.51%, 10:19:44 remaining",
  "Executed block 9076012, Mgas/sec: 1390.78, progress: 37.55%, 10:19:21 remaining",
  "Executed block 9081480, Mgas/sec: 1401.57, progress: 37.60%, 10:18:58 remaining",
  "Executed block 9087000, Mgas/sec: 1525.69, progress: 37.65%, 10:18:29 remaining",
  "Executed block 9091534, Mgas/sec: 1063.37, progress: 37.69%, 10:18:22 remaining",
  "Executed block 9097335, Mgas/sec: 1641.43, progress: 37.74%, 10:17:47 remaining",
  "Executed block 9103276, Mgas/sec: 1647.93, progress: 37.80%, 10:17:11 remaining",
  "Executed block 9109495, Mgas/sec: 1663.24, progress: 37.85%, 10:16:34 remaining",
  "Executed block 9115281, Mgas/sec: 1602.69, progress: 37.90%, 10:16:01 remaining",
  "Executed block 9120255, Mgas/sec: 1442.56, progress: 37.95%, 10:15:36 remaining",
  "Executed block 9124079, Mgas/sec: 1164.25, progress: 37.99%, 10:15:25 remaining",
  "Executed block 9128849, Mgas/sec: 1404.91, progress: 38.04%, 10:15:02 remaining",
  "Executed block 9134026, Mgas/sec: 1519.40, progress: 38.09%, 10:14:33 remaining",
  "Executed block 9139244, Mgas/sec: 1500.60, progress: 38.13%, 10:14:05 remaining",
  "Executed block 9144378, Mgas/sec: 1393.60, progress: 38.18%, 10:13:42 remaining",
];

const StyledPerformance = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 9rem;
  font-size: 2rem;
  width: 100%;
  padding: 0 14rem;
`;

const DescriptionSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  font-size: 2.1rem;
  font-weight: 400;
  margin-top: 2rem;
  line-height: 1.4;
`;

const Highlight = styled.p`
  position: relative;
  font-size: 3.6rem;
  font-weight: 600;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TerminalSection = styled.div`
  width: 100%;
`;

const Performance = () => {
  return (
    <Section id="performance" header="Performance">
      <StyledPerformance>
        <DescriptionSection>
          <Description>
            Akula preprocesses data outside of the storage engine, making
            database write operations significantly faster. Is uses a staged
            synchronization technique which allows for rapid synchronization. It
            is written in Rust, leveraging a new Rust RVM interpreter evmodin,
            specifically designed for Akula to allow for asynchronous state
            access. Akula’s sync is split into stages, which allows for
            unprecedented parallelization of all major operations.
          </Description>
          <Description>
            <Highlight>
              All of this enables the new standard of performance, not seen in
              full nodes before.
            </Highlight>
          </Description>
          <Description>
            Akula beats Erigon client by 1.5–2 times on execution performance.
            Without building additional indexes, a full validation of Ethereum
            mainnet from genesis in can be completed in under 24h.
          </Description>
        </DescriptionSection>
        <TerminalSection>
          <Terminal small code={terminalContent} />
        </TerminalSection>
      </StyledPerformance>
    </Section>
  );
};

export default Performance;
