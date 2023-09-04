import './App.css';
import { PiCurrencyDollarSimple } from 'react-icons/pi';
import { MdPerson } from 'react-icons/md';
import { useState, useEffect } from 'react';

function App() {
  const [percentage, setPercentage] = useState();
  const [billValue, setBill] = useState();
  const [warning1, setWarning] = useState(" ");
  const [warning2, setWarning2] = useState(" ");
  const [pplNo, setPplNo] = useState();
  const [tipPerson, setTipPerson] = useState();
  const [totalPerson, setTotalPerson] = useState();

  useEffect(() => {
    if (billValue > 0 && percentage > 0 && pplNo > 0) {
      let tipPer = (billValue * percentage) / pplNo;
      let totalPer = (billValue / pplNo) + tipPer;

      setTipPerson(tipPer);
      setTotalPerson(totalPer);
      setWarning(" ");
      setWarning2(" ");
    } else if (pplNo == 0) {
      setTipPerson(0);
      setTotalPerson(0);
      setWarning2("Can't be zero!");
    } else if (!billValue > 0) {
      setTipPerson(0);
      setTotalPerson(0);
      setWarning("Please enter all the values");
    } else if (!percentage > 0) {
      setWarning("Please enter all the values");
    } else {
      // Handle other cases if needed
    }
  }, [billValue, percentage, pplNo]);

  const reset = () => {
    setPercentage(0);
    setBill(0);
    setWarning(" ");
    setWarning2(" ");
    setPplNo(0);
    setTipPerson(0);
    setTotalPerson(0);
  };

  return (
    <div className="App">
      <div className='container '>
        <div className='calContent'>
          <p>Bill </p>
          <div className='inputHolder'>
            <i className='icon'><PiCurrencyDollarSimple /> </i>
            <input
              type="number"
              name='billInput'
              onChange={(event) => { setBill(event.target.value); }}
              className='inputTip'
              placeholder='0'
              min="0"
              step="1"
              value={billValue}
            ></input>
          </div>
          <label className='warning'>{warning1}</label>

          <p>Select Tip % </p>

          <div className='listBtns'>
            <button name='btn5' onClick={() => { setPercentage(0.05); }}> 5% </button>
            <button name='btn10' onClick={() => { setPercentage(0.10); }}> 10% </button>
            <button name='btn15' onClick={() => { setPercentage(0.15); }}> 15% </button>
            <button name='btn25' onClick={() => { setPercentage(0.25); }}> 25% </button>
            <button name='btn50' onClick={() => { setPercentage(0.50); }}> 50% </button>
            <input
              name='custom'
              onChange={(event) => { setPercentage(event.target.value / 100); }}
              type="number"
              placeholder='Custom'
              value={percentage * 100}
            ></input>
          </div>

          <p>Number of People </p>

          <div className='inputHolder'>
            <i className='icon'><MdPerson /> </i>
            <input
              name='noPerson'
              onChange={(event) => { setPplNo(event.target.value); }}
              type="text"
              className='peopleN'
              placeholder='0'
              value={pplNo}
            ></input>
          </div>

          <label className='warning'>{warning2}</label>
        </div>

        <div className='resContent'>
          <div className='container1'>
            <div className='cont1text'>
              <h3>Tip Amount</h3>
              <h5> \ person</h5>
            </div>
            <h1>{tipPerson}</h1>
          </div>

          <div className='container1'>
            <div className='cont1text'>
              <h3>Total</h3>
              <h5> \ person</h5>
            </div>
            <h1>{totalPerson}</h1>
          </div>

          <button onClick={reset} className='reset'> RESET </button>
        </div>
      </div>
    </div>
  );
}

export default App;
