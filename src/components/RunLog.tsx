import { runs } from '../data'
import Entry from './Entry'

function RunLog() {

  return (
    <div className="log">
      {runs.map((run, i) => { return <Entry date={run.date} speed={run.speed} key={i} /> })}
    </div>
  )
}
export default RunLog