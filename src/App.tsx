import { Fragment } from "react";
import "./App.css";
import { AddFavStar } from "./components/add-fav-star/add-fav-star";
import { Bksp } from "./components/bksp/bksp";
import { Contact } from "./components/contact/contact";
import { Digit } from "./components/digit/digit";
import { DigitProps } from "./components/digit/digit-props";
import { Disonnect } from "./components/disconnect/disconnect";
import { Display } from "./components/display/display";
import { PlaceCall } from "./components/place-call/place-call";

const digit = (symbol: number | string, mnemonics?: string | undefined) => ({ symbol, mnemonics } as DigitProps);
const settings: DigitProps[][] = [
  [digit(1), digit(2, "abc"), digit(3, "def")],
  [digit(4, "ghi"), digit(5, "jkl"), digit(6, "mno")],
  [digit(7, "pqrs"), digit(8, "tuv"), digit(9, "wxyz")],
  [digit("*"), digit(0), digit("#")],
]
function App() {
  return (
      <div className="container">
        <Contact />
        <Disonnect />
        <Display />
        {settings.map((r, ix) => (<Fragment key={ix}>{r.map((d) => (<Digit key={d.symbol} {...d} />))}</Fragment>))}
        <Fragment>
          <AddFavStar />
          <PlaceCall />
          <Bksp />
        </Fragment>
      </div>


  );
}

export default App;
