import styled from "styled-components";
import Header from "./components/Header";
import DisplayCards from "./components/DisplayCards";

const AppWrapper = styled.div`
  width: 100vw;
  background-color: #2364aa;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <DisplayCards />
    </AppWrapper>
  );
}

export default App;
