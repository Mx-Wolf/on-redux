import  "./App.css"; 
import { Display } from "./components/display/display";
function App() {
  return (
<div>
  <div className="container">
    <Display />
    <div className="row">
      <div className="digit" id="one">1</div>
      <div className="digit" id="two">2
        <div className="sub">ABC</div>
      </div>
      <div className="digit" id="three">3
        <div className="sub">DEF</div>
      </div>
    </div>
    <div className="row">
      <div className="digit" id="four">4
        <div className="sub">GHI</div>
      </div>
      <div className="digit" id="five">5
        <div className="sub">JKL</div>
      </div>
      <div className="digit">6
        <div className="sub">MNO</div>
      </div>
    </div>
    <div className="row">
      <div className="digit">7
        <div className="sub">PQRS</div>
      </div>
      <div className="digit">8
        <div className="sub">TUV</div>
      </div>
      <div className="digit">9
        <div className="sub">WXYZ</div>
      </div>
    </div>
    <div className="row">
      <div className="digit">*
      </div>
      <div className="digit">0
      </div>
      <div className="digit">#
      </div>
    </div>
    <div className="botrow"><i className="fa fa-star-o dig" aria-hidden="true" />
      <div id="call"><i className="fa fa-phone" aria-hidden="true" /></div>
      <i className="fa fa-long-arrow-left dig" aria-hidden="true" />
    </div>
  </div>
</div>

  );
}

export default App;
