import styled from "styled-components";

const StyledApp = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: var(--bg);
`;

const App = () => {
  return <StyledApp>Akula Website</StyledApp>;
};

export default App;
