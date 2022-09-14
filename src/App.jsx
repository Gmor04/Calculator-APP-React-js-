import { useState } from "react";

function App() {
  const [Fnum, setFnum] = useState("0");
  const [Snum, setSnum] = useState("");
  const [Answer, setAnswer] = useState('');
  const [upperdis, setUpperdis] = useState("");
  const [Operator, setOperator] = useState("");



  function getNumber(ev) {
    // console.log(ev);
    setFnum(Number(Fnum + ev))

  }

  function getOperator(ev) {
    // console.log(ev);
    setOperator(ev);
    setUpperdis(Fnum + ev);
    setFnum("");
    setSnum(Fnum)
  }
  function RaiseTo() {
    setUpperdis(`sqr[${Fnum}]`)
    setAnswer(Fnum * Fnum)
  }
  function SquareRoot() {
    setUpperdis(`sqrt[${Fnum}]`)
    setAnswer(Math.sqrt(Fnum))
  }
  function InverseOf() {
    setUpperdis(`1/[${Fnum}]`)
    setAnswer((1 / Fnum).toFixed(3))
  }
  function PowerOff() {
    setFnum('');
    setSnum('');
    setOperator('');
    setAnswer('');
    setUpperdis('')
  }
  function PowerOn() {
    setAnswer('');
    setFnum('0');
    setSnum('');
    setOperator('');
    setUpperdis('')
  }
  function Del() {
    setUpperdis('')
     setAnswer('')
     setFnum('0')
  }
  function getAnwser() {
    // console.log('active');
    setUpperdis( Snum + Operator + Fnum)
    if (Operator === "+") {
      setAnswer( Snum + Fnum) 
    }
    if (Operator === "-") {
      setAnswer( Snum - Fnum)
    }
    if (Operator === "x") {
      setAnswer( Snum * Fnum)
    }
    if (Operator === "/") {
      setAnswer( Snum / Fnum)
    }
   

  }

  return (
    <div className="App">
      <div
        className="row d-flex justify-content-center align-items-center "
        style={{ height: "100vh"}}
      >
        <div className="col-md-3 ">
          <div className="card border-0 bg-primary" style={{ height: "62vh" }}>
            <div className="card-body my-0">
              <div className="upperdiv w-100" style={{ height: "3vh" }}>
                <span className="text-light">Calculator</span>
              </div>
              <div
                className="upperdiv w-100 bg-light pe-3 fw-normal fs-5 text-end fst-italic text-primary"
                style={{ height: "3vh" }}
              >{upperdis}</div>
              <div
                className="upperdiv w-100 bg-light pe-3 fw-semibold fs-4 text-end fst-italic text-primary "
                style={{ height: "5vh" }}
              >{Answer?Answer:Fnum}</div>
              <hr className="bg-light" />
              <div className="buttons d-flex justify-content-around mt-2">
                <div className="nobtn btn btn-outline-light">%</div>
                <div className=" nobtn btn  btn-outline-light" onClick={PowerOff}><i className="fa-solid fa-power-off"></i></div>
                <div className=" nobtn btn btn-outline-light" onClick={PowerOn}>C</div>
                <div className=" nobtn btn btn-outline-light" onClick={Del}>Del</div>
                {/* <i className="fa-solid fa-delete-left "></i> */}
              </div>
              <div className="buttons d-flex justify-content-around mt-2">
                <div className="nobtn btn btn-outline-light" onClick={InverseOf}>1/x</div>
                <div className=" nobtn btn  btn-outline-light"  onClick={RaiseTo}>X^2</div>
                <div className=" nobtn btn btn-outline-light" onClick={SquareRoot}><i className="fa-solid fa-square-root-variable"></i></div>
                <div className=" nobtn btn btn-outline-light" onClick={(e) => getOperator(e.target.innerHTML)} >/</div>
              </div>
              <div className="buttons d-flex justify-content-around mt-2">
                <div className="nobtn btn btn-outline-light" onClick={(e) => getNumber(e.target.innerHTML)}>7</div>
                <div className=" nobtn btn  btn-outline-light" onClick={(e) => getNumber(e.target.innerHTML)}>8</div>
                <div className=" nobtn btn btn-outline-light" onClick={(e) => getNumber(e.target.innerHTML)}>9</div>
                <div className=" nobtn btn btn-outline-light" onClick={(e) => getOperator(e.target.innerHTML)}>x</div>
              </div>
              <div className="buttons d-flex justify-content-around mt-2">
                <div className="nobtn btn btn-outline-light" onClick={(e) => getNumber(e.target.innerHTML)}>4</div>
                <div className=" nobtn btn  btn-outline-light" onClick={(e) => getNumber(e.target.innerHTML)}>5</div>
                <div className=" nobtn btn btn-outline-light" onClick={(e) => getNumber(e.target.innerHTML)}>6</div>
                <div className=" nobtn btn btn-outline-light" onClick={(e) => getOperator(e.target.innerHTML)} >-</div>
              </div>
              <div className="buttons d-flex justify-content-around mt-2">
                <div className="nobtn btn btn-outline-light" onClick={(e) => getNumber(e.target.innerHTML)}>1</div>
                <div className=" nobtn btn  btn-outline-light" onClick={(e) => getNumber(e.target.innerHTML)}>2</div>
                <div className=" nobtn btn btn-outline-light" onClick={(e) => getNumber(e.target.innerHTML)}>3</div>
                <div className=" nobtn btn btn-outline-light" onClick={(e) => getOperator(e.target.innerHTML)}>+</div>
              </div>
              <div className="buttons d-flex justify-content-around mt-2">
                <div className="nobtn btn btn-outline-light"><i className="fa-solid fa-plus-minus"></i></div>
                <div className=" nobtn btn  btn-outline-light" onClick={(e) => getNumber(e.target.innerHTML)}>0</div>
                <div className=" nobtn btn btn-outline-light" onClick={(e) => getNumber(e.target.innerHTML)}>.</div>
                <div className=" nobtn btn btn-outline-light" onClick={() => getAnwser()}>=</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
