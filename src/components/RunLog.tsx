import { ChangeEvent, MouseEvent, useState } from 'react'
import { runs } from '../data'
import Entry from './Entry'

function RunLog() {

  const [submitting, setSubmitting] = useState(false)
  const [entrySpeed, setEntrySpeed] = useState(5)
  const [entryDate, setEntryDate] = useState('')
  const [entries, setEntries] = useState([...runs])

  const submitEntry = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (entryDate === '') {
      alert('Please add a date!')
      return
    }

    if (entrySpeed > 1 && entrySpeed < 13) {
      let newEntry = { date: entryDate, speed: entrySpeed }
      setEntries([...entries, newEntry])
      setSubmitting(false)
    } else {
      alert(entrySpeed > 12 ? "You're probably not that fast" : "You're probably not that slow")
    }
  }

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'speed') {
      setEntrySpeed(Number(e.target.value))
    } else {
      setEntryDate(e.target.value)
    }
  }

  return (
    <div className="log">
      {entries.map((run, i) => { return <Entry date={run.date} speed={run.speed} key={i} /> })}
      {submitting &&
        <div className='entry-form'>
          <div className='form-inputs'>
            <input type='date' id='date' onChange={inputChange}></input>
            <input type='number' id='speed' onChange={inputChange} min={1} max={12} maxLength={2} ></input>mph
          </div>
          <div className='form-buttons'>
            <button onClick={submitEntry}>Submit</button>
            <button onClick={() => setSubmitting(false)}>Cancel</button>
          </div>
        </div>
      }
      {!submitting && <button className='new-entry' onClick={() => setSubmitting(true)}>New Entry</button>}

    </div>
  )
}
export default RunLog