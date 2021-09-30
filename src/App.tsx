import "./App.css";
import { Digit } from "./components/digit/digit";
import { DigitProps } from "./components/digit/digit-props";
import { Display } from "./components/display/display";
import { RowFrame } from "./components/row-frame/row-frame";
const digit = (symbol: number | string, mnemonics?: string | undefined) => ({ symbol, mnemonics } as DigitProps);
const settings: DigitProps[][] = [
  [digit(1), digit(2, "abc"), digit(3, "def")],
  [digit(4, "ghi"), digit(5, "jkl"), digit(6, "mno")],
  [digit(7, "pqrs"), digit(8, "tuv"), digit(9, "wxyz")],
  [digit("*"), digit(0), digit("#")],
]
function App() {
  return (
    <div>
      <div className="container">
        <Display />
        {settings.map((r, ix) => (<RowFrame key={ix}>{r.map((d) => (<Digit key={d.symbol} {...d} />))}</RowFrame>))}
        <div className="botrow">
          <i className="fa fa-star-o dig" aria-hidden="true" />
          <div id="call">
            <i className="fa fa-phone" aria-hidden="true" />
          </div>
          <i className="fa fa-long-arrow-left dig" aria-hidden="true" />
        </div>
      </div>
    </div>

  );
}

export default App;
