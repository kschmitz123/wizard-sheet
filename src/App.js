import styled from "styled-components/macro";
import Table from "./components/Table";

function App() {
  return (
    <Container>
      <Table />
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 70px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
