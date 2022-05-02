interface EntryProps {
  date: string
  speed: number
}

function Entry({ date, speed }: EntryProps) {
  const getTime = (x: number) => {
    let minutes = x % 60;
    let minutesString = minutes.toString().split('.')[0]

    let seconds = Number(minutes.toString().split('.')[1]) * 0.60
    let secondsString = seconds.toString().substring(0, 2)

    if (minutes < 10) {
      minutesString = '0' + minutesString
    }
    if (seconds < 10) {
      secondsString = '0' + secondsString
    } else if (!seconds) {
      secondsString = '00'
    }

    return minutesString + ':' + secondsString
  }

  return (
    <div className="entry">
      <div className="entry-block">
        <p>Date</p>
        <p>{date}</p>
      </div>
      <div className="entry-block">
        <p>Treadmill MPH</p>
        <p>{speed}</p>
      </div>
      <div className="entry-block">
        <p>Pace per Mile</p>
        <p>{getTime(60 / speed)}</p>
      </div>
      <div className="entry-block">
        <p>Pace per Kilometer</p>
        <p>{getTime(60 / (speed * 1.609))}</p>
      </div>
      <div className="entry-block">
        <p>Total Time for 5k</p>
        <p>{getTime((60 / (speed * 1.609)) * 5)}</p>
      </div>
    </div>
  )
}
export default Entry