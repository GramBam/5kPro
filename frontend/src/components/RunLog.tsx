import { useState } from 'react'
import { runs } from '../data'
import Entry from './Entry'

function RunLog() {
  const [entries, setEntries] = useState([...runs])

  return (
    <div className="log">
      {entries.map((run, i) => { return <Entry date={run.date} speed={run.speed} key={i} /> })}
    </div>
  )
}
export default RunLog