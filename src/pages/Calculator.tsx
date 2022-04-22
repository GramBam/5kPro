import { ChangeEvent, ChangeEventHandler, useState } from "react"
import UnitSlider from "../components/UnitSlider";

function Calculator() {
  const [calcType, setCalcType] = useState('pace')
  const [miles, setMiles] = useState(false)
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const [distance, setDistance] = useState(0)
  const [answer, setAnswer] = useState('')

  const unitChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMiles(e.target.checked)
  }

  const calcChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCalcType(e.target.value)
  }

  const timeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTime((prev) => ({ ...prev, [e.target.id]: Number(e.target.value) }))
  }

  const distInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDistance(Number(e.target.value))
  }

  const formatTime = (x: number, hours: boolean = false): string => {
    if (x > 0) {
      if (x < 9) {
        return '0' + x.toString()
      } else {
        return x.toString()
      }
    } else {
      return hours ? '' : '00'
    }
  }


  const calculate = () => {
    let t: number = ((time.hours * 3600) + (time.minutes * 60) + time.seconds) / distance
    let h: number = Math.floor(t / 3600)
    let m: number = Math.floor(t % 3600 / 60)
    let s: number = Math.floor(t % 3600 % 60)

    setAnswer(h === 0 ? formatTime(m) + ':' + formatTime(s) : formatTime(h, true) + ':' + formatTime(m) + ':' + formatTime(s))
  }

  const clearInputs = () => {
    setTime({ hours: 0, minutes: 0, seconds: 0 })
    setDistance(0)
    setAnswer('')
  }

  return (
    <div className="calc-container">
      <div className="options">
        <p className="title">Choose a Calculation</p>
        <select onChange={calcChange}>
          <option value="pace">Calculate Pace</option>
          <option value="time">Calculate Time</option>
          <option value="distance">Calculate Distance</option>
        </select>
        <UnitSlider callback={unitChange} />
      </div>

      <div className="calc-inputs">
        <p className="inputs-title">Time</p>
        <div className="input-row">
          <div>
            <input maxLength={2} placeholder="hr" value={time.hours} id="hours" onChange={timeInputChange} />
            <p>Hrs</p>
          </div>
          <div>
            <input maxLength={2} placeholder="min" value={time.minutes} id="minutes" onChange={timeInputChange} />
            <p>Mins</p>
          </div>
          <div>
            <input maxLength={2} placeholder="sec" value={time.seconds} id="seconds" onChange={timeInputChange} />
            <p>Secs</p>
          </div>
        </div>
      </div>

      <div className="calc-inputs">
        <p className="inputs-title">Distance</p>
        <div className="input-row">
          <input value={distance} style={{ width: '50px' }} maxLength={2} placeholder="distance" onChange={distInputChange} />
          <p>{miles ? 'miles' : 'kilometers'}</p>
        </div>
      </div>

      <div className="button-row">
        <button onClick={calculate}>Calculate</button>
        <button onClick={clearInputs}>Clear</button>
      </div>

      {answer !== '' &&
        <div className="answer">
          <p className="inputs-title">Pace per {miles ? 'mile' : 'kilometer'}</p>
          <p>{answer}</p>
        </div>
      }



    </div>
  )
}
export default Calculator