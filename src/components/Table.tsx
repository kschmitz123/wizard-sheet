import styled from "styled-components/macro";

const Table = styled.table`
  width: 19rem;
  padding: 5px;
  border-collapse: collapse;

  input,
  div,
  p {
    border: none;
    font-size: 2rem;
    font-weight: bold;
    height: 3rem;
    width: 3rem;
    text-align: center;
  }
  div {
    margin: 0;
    background: white;
  }
  .finalCount {
    margin-top: 10px;
    width: 6rem;
  }

  p {
    background: white;
    color: black;
  }
  input[type="checkbox"] {
    margin: 0;
  }
  button {
    margin-top: 10px;
    width: 3.5rem;
    height: 3rem;
  }

  .blue {
    color: blue;
    background: none;
  }
  .red {
    color: red;
    background: none;
  }
  .yellow {
    color: #eabe18;
    background: none;
  }
  .green {
    color: green;
    background: none;
  }
  .extrapoints {
    color: gray;
    width: 2.5rem;
    height: 2.5rem;
    position: relative;
  }
  .checkbox_extrapoints {
    position: absolute;
    left: 0px;
    opacity: 60%;
    color: gray;
    width: 2.5rem;
    height: 2.5rem;
  }
`;
export default Table;
