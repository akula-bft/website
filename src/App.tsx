import styled from "styled-components";
import Benefits from "./components/Benefits";
import Performance from "./components/Performance";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Networks from "./components/Networks";
import Supporters from "./components/Supporters";
import GetStarted from "./components/GetStarted";

const StyledApp = styled.div`
  width: 100%;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: space-between;
`;

const App = () => {
  return (
    <StyledApp>
      <Hero />
      <Benefits />
      <Performance />
      <Supporters />
      <Networks />
      <GetStarted />
      <Footer />
    </StyledApp>
  );
};

export default App;
