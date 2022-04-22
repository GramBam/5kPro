import { ChangeEvent, ChangeEventHandler, useState } from "react"
import UnitSlider from "../components/UnitSlider";

function Calculator() {
  const [calcType, setCalcType] = useState('pace')
  const [miles, setMiles] = useState(false)

  const unitChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMiles(e.target.checked)
  }
  const calcChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCalcType(e.target.value)
  }

  return (
    <div className="calc-container">
      <div className="options">
        <p>Choose a Calculation</p>
        <select onChange={calcChange}>
          <option value="pace">Calculate Pace</option>
          <option value="time">Calculate Time</option>
          <option value="distance">Calculate Distance</option>
        </select>
        <UnitSlider callback={unitChange} />
      </div>

      <div className="calc-inputs">
        <p>Time</p>
        <div className="input-row">
          <input maxLength={2} placeholder="hr" />
          <input maxLength={2} placeholder="min" />
          <input maxLength={2} placeholder="sec" />
        </div>
      </div>
      <div className="calc-inputs">
        <p>Distance</p>
        <div className="input-row">
          <input style={{ width: '50px' }} maxLength={2} placeholder="distance" />
          <p>{miles ? 'miles' : 'kilometers'}</p>
        </div>
      </div>

      <div className="button-row">
        <button>Calculate</button>
        <button>Clear</button>
      </div>


    </div>
  )
}
export default Calculator