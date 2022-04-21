function RunLog() {

  const speed: number = 8

  return (
    <div className="log">
      <div className="entry">
        <p>Date: April 12 2022</p>
        <p>Treadmill MPH: {speed}</p>
        <p>KPH: {speed * 1.609}</p>
        <p>Pace per Mile: {(60 / speed).toFixed(3)} Minutes</p>
        <p>Pace per Kilometer {(60 / (speed * 1.609)).toFixed(3)} Minutes</p>
        <p>Total Time for 5k: {((60 / (speed * 1.609)) * 5).toFixed(3)} Minutes</p>
      </div>
    </div>
  )
}
export default RunLog