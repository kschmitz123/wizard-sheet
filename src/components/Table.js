import styled from "styled-components/macro";
import { useState } from "react";
import narr from "../assets/narr.svg";

const Table = () => {
  const [sum, setSum] = useState({
    blue1: 0,
    green1: 0,
    yellow1: 0,
    red1: 0,
  });
  const [sum2, setSum2] = useState({
    blue2: 0,
    green2: 0,
    yellow2: 0,
    red2: 0,
  });
  const [sum3, setSum3] = useState({
    blue3: 0,
    green3: 0,
    yellow3: 0,
    red3: 0,
  });
  const [sum4, setSum4] = useState({
    blue4: 0,
    green4: 0,
    yellow4: 0,
    red4: 0,
  });
  const [sum5, setSum5] = useState({
    blue5: 0,
    green5: 0,
    yellow5: 0,
    red5: 0,
  });
  const [total, setTotal] = useState("");
  const [total2, setTotal2] = useState("");
  const [total3, setTotal3] = useState("");
  const [total4, setTotal4] = useState("");
  const [total5, setTotal5] = useState("");
  const [finalCount, setFinalCount] = useState("");

  const handleChange = (event) => {
    let value = 0;

    if (event.target.value === "X" && event.target.name.includes(1)) {
      value = 1;
    } else if (event.target.value === "X" && event.target.name.includes(2)) {
      value = 2;
    } else if (event.target.value === "X" && event.target.name.includes(3)) {
      value = 3;
    } else if (event.target.value === "X" && event.target.name.includes(4)) {
      value = 4;
    } else if (event.target.value === "X" && event.target.name.includes(5)) {
      value = 5;
    } else {
      value = -Math.abs(event.target.value);
    }

    setSum({ ...sum, [event.target.name]: value });
    setSum2({ ...sum2, [event.target.name]: value });
    setSum3({ ...sum3, [event.target.name]: value });
    setSum4({ ...sum4, [event.target.name]: value });
    setSum5({ ...sum5, [event.target.name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { blue1, green1, yellow1, red1 } = sum;
    const { blue2, green2, yellow2, red2 } = sum2;
    const { blue3, green3, yellow3, red3 } = sum3;
    const { blue4, green4, yellow4, red4 } = sum4;
    const { blue5, green5, yellow5, red5 } = sum5;
    const total = blue1 + green1 + yellow1 + red1;
    const total2 = blue2 + green2 + yellow2 + red2;
    const total3 = blue3 + green3 + yellow3 + red3;
    const total4 = blue4 + green4 + yellow4 + red4;
    const total5 = blue5 + green5 + yellow5 + red5;
    setTotal(total);
    setTotal2(total2);
    setTotal3(total3);
    setTotal4(total4);
    setTotal5(total5);
    setFinalCount(total + total2 + total3 + total4 + total5);
  };

  return (
    <form action="submit" onSubmit={handleSubmit} onChange={handleChange}>
      <StyledTable>
        <tbody>
          <tr>
            <td>
              <img src={narr} alt="" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>
              <p className="extrapoints">⑨</p>
            </td>
            <td>
              <p readOnly value="x1" type="text">
                x1
              </p>
            </td>
            <td>
              <p readOnly value="x2" type="text">
                x2
              </p>
            </td>
            <td>
              <p readOnly value="x3" type="text">
                x3
              </p>
            </td>
            <td>
              <p readOnly value="x4" type="text">
                x4
              </p>
            </td>
            <td>
              <p readOnly value="x5" type="text">
                x5
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="blue">⍭</p>
            </td>
            <td>
              <input
                name="blue1"
                style={{ background: "var(--blue-gradient)" }}
                type="text"
              />
            </td>
            <td>
              <input
                name="blue2"
                style={{ background: "var(--blue-gradient)" }}
                type="text"
              />
            </td>
            <td>
              <input
                name="blue3"
                style={{ background: "var(--blue-gradient)" }}
                type="text"
              />
            </td>
            <td>
              <input
                name="blue4"
                style={{ background: "var(--blue-gradient)" }}
                type="text"
              />
            </td>
            <td>
              <input
                name="blue5"
                style={{ background: "var(--blue-gradient)" }}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>
              <p className="green">⍧</p>
            </td>
            <td>
              <input
                name="green1"
                style={{ background: "var(--green-gradient)" }}
                type="text"
              />
            </td>
            <td>
              <input
                name="green2"
                style={{ background: "var(--green-gradient)" }}
                type="text"
              />
            </td>
            <td>
              <input
                name="green3"
                style={{ background: "var(--green-gradient)" }}
                type="text"
              />
            </td>
            <td>
              <input
                name="green4"
                style={{ background: "var(--green-gradient)" }}
                type="text"
              />
            </td>
            <td>
              <input
                name="green5"
                style={{ background: "var(--green-gradient)" }}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>
              <p className="yellow">⍬</p>
            </td>
            <td>
              <input
                name="yellow1"
                style={{ background: "var(--yellow-gradient)" }}
                type="text"
              />
            </td>
            <td>
              <input
                name="yellow2"
                style={{ background: "var(--yellow-gradient)" }}
                type="text"
              />
            </td>
            <td>
              <input
                name="yellow3"
                style={{ background: "var(--yellow-gradient)" }}
                type="text"
              />
            </td>
            <td>
              <input
                name="yellow4"
                style={{ background: "var(--yellow-gradient)" }}
                type="text"
              />
            </td>
            <td>
              <input
                name="yellow5"
                style={{ background: "var(--yellow-gradient)" }}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>
              <p className="red">⍦</p>
            </td>
            <td>
              <input
                name="red1"
                style={{ background: "var(--red-gradient)" }}
                type="text"
              />
            </td>
            <td>
              <input
                name="red2"
                style={{ background: "var(--red-gradient)" }}
                type="text"
              />
            </td>
            <td>
              <input
                name="red3"
                style={{ background: "var(--red-gradient)" }}
                type="text"
              />
            </td>
            <td>
              <input
                name="red4"
                style={{ background: "var(--red-gradient)" }}
                type="text"
              />
            </td>
            <td>
              <input
                name="red5"
                style={{ background: "var(--red-gradient)" }}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>
              <p className="extrapoints">3</p>
            </td>
            <td>
              <div>{total}</div>
            </td>
            <td>
              <div>{total2}</div>
            </td>
            <td>
              <div>{total3}</div>
            </td>
            <td>
              <div>{total4}</div>
            </td>
            <td>
              <div>{total5}</div>
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="3">
              <button type="submit">Done!</button>
            </td>
            <td colSpan="2">
              <div className="finalCount">∑ {finalCount}</div>
            </td>
          </tr>
        </tbody>
      </StyledTable>
    </form>
  );
};

const StyledTable = styled.table`
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
  }
`;

export default Table;
