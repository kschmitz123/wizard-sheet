import styled from "styled-components/macro";
import GameSheet from "./components/GameSheet";
import Instructions from "./components/Instructions";

function App() {
  return (
    <Container>
      <GameSheet />
      <Instructions />
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 50px 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
