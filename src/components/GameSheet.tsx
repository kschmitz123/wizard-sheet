import React, { useState } from "react";
import Table from "./Table";
import narr from "../assets/narr.svg";
import { NumberInput } from "./NumberInput";

const GameSheet = () => {
  const [sum, setSum] = useState({
    blue0: 0,
    green0: 0,
    yellow0: 0,
    red0: 0,
  });
  const [sum2, setSum2] = useState({
    blue1: 0,
    green1: 0,
    yellow1: 0,
    red1: 0,
  });
  const [sum3, setSum3] = useState({
    blue2: 0,
    green2: 0,
    yellow2: 0,
    red2: 0,
  });
  const [sum4, setSum4] = useState({
    blue3: 0,
    green3: 0,
    yellow3: 0,
    red3: 0,
  });
  const [sum5, setSum5] = useState({
    blue4: 0,
    green4: 0,
    yellow4: 0,
    red4: 0,
  });
  const [total, setTotal] = useState<number>(0);
  const [total2, setTotal2] = useState<number>(0);
  const [total3, setTotal3] = useState<number>(0);
  const [total4, setTotal4] = useState<number>(0);
  const [total5, setTotal5] = useState<number>(0);
  const [finalCount, setFinalCount] = useState<number>(0);
  const [xCount, setXCount] = useState(0);
  const [bonusCount, setBonusCount] = useState(false);

  const getXCount = () => {
    const form = document.querySelector("form");
    if (!form) return;
    const values = Array.from(form.elements)
      .map((el: Element) => {
        const input = el as HTMLInputElement;
        if (!input.name) return null;
        if (input.type === "checkbox") return input.checked;
        return input.value;
      })
      .filter(Boolean);

    const xCount = values.filter(
      (value) => value === "x" || value === "X" || value === true
    );
    setXCount(xCount.length);
  };

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    let value = 0;
    const isX = event.target.value === "x" || event.target.value === "X";

    getXCount();

    if (isX && event.target.name.includes("0")) {
      value = 1;
    } else if (isX && event.target.name.includes("1")) {
      value = 2;
    } else if (isX && event.target.name.includes("2")) {
      value = 3;
    } else if (isX && event.target.name.includes("3")) {
      value = 4;
    } else if (isX && event.target.name.includes("4")) {
      value = 5;
    } else if (event.target.value.trim() === "") {
      value = 0;
    } else {
      value = -Math.abs(parseInt(event.target.value));
    }
    setSum({ ...sum, [event.target.name]: value });
    setSum2({ ...sum2, [event.target.name]: value });
    setSum3({ ...sum3, [event.target.name]: value });
    setSum4({ ...sum4, [event.target.name]: value });
    setSum5({ ...sum5, [event.target.name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { blue0, green0, yellow0, red0 } = sum;
    const { blue1, green1, yellow1, red1 } = sum2;
    const { blue2, green2, yellow2, red2 } = sum3;
    const { blue3, green3, yellow3, red3 } = sum4;
    const { blue4, green4, yellow4, red4 } = sum5;
    const total1 = blue0 + green0 + yellow0 + red0;
    const total2 = blue1 + green1 + yellow1 + red1;
    const total3 = blue2 + green2 + yellow2 + red2;
    const total4 = blue3 + green3 + yellow3 + red3;
    const total5 = blue4 + green4 + yellow4 + red4;
    setTotal(total1);
    setTotal2(total2);
    setTotal3(total3);
    setTotal4(total4);
    setTotal5(total5);
    setFinalCount(total1 + total2 + total3 + total4 + total5);
  };
  return (
    <form action="submit" onSubmit={handleSubmit} onChange={handleChange}>
      <Table>
        <tbody>
          <tr>
            <td>
              <img src={narr} alt="" />
            </td>
            {new Array(5).fill(<input />).map((_el, index) => {
              return (
                <td key={`checkbox-${index}`}>
                  <input name="checkbox-narr" type="checkbox" />
                </td>
              );
            })}
          </tr>
          <tr>
            <td>
              {xCount >= 9 ? (
                <p style={{ color: "green" }} className="extrapoints">
                  ⑨
                </p>
              ) : (
                <p className="extrapoints">⑨</p>
              )}
            </td>
            <td>
              <p>x1</p>
            </td>
            <td>
              <p>x2</p>
            </td>
            <td>
              <p>x3</p>
            </td>
            <td>
              <p>x4</p>
            </td>
            <td>
              <p>x5</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="blue">⍭</p>
            </td>
            {new Array(5).fill(NumberInput).map((_el, index) => {
              return (
                <td key={index}>
                  <NumberInput number={index} color="blue" />
                </td>
              );
            })}
          </tr>
          <tr>
            <td>
              <p className="green">⍧</p>
            </td>
            {new Array(5).fill(NumberInput).map((_el, index) => {
              return (
                <td key={index}>
                  <NumberInput number={index} color="green" />
                </td>
              );
            })}
          </tr>
          <tr>
            <td>
              <p className="yellow">⍬</p>
            </td>
            {new Array(5).fill(NumberInput).map((_el, index) => {
              return (
                <td key={index}>
                  <NumberInput number={index} color="yellow" />
                </td>
              );
            })}
          </tr>
          <tr>
            <td>
              <p className="red">⍦</p>
            </td>
            {new Array(5).fill(NumberInput).map((_el, index) => {
              return (
                <td key={index}>
                  <NumberInput number={index} color="red" />
                </td>
              );
            })}
          </tr>
          <tr>
            <td>
              <div className="extrapoints">
                <input
                  className="checkbox_extrapoints"
                  type="checkbox"
                  onClick={() => setBonusCount(!bonusCount)}
                />
                3
              </div>
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
            <td colSpan={3}>
              <button type="submit">Fertig!</button>
            </td>
            <td colSpan={2}>
              <div className="finalCount">
                ∑ {bonusCount === true ? finalCount + 3 : finalCount}
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </form>
  );
};

export default GameSheet;
