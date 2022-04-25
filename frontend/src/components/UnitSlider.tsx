interface UnitSliderProps {
  callback: Function
}

function UnitSlider({ callback }: UnitSliderProps) {
  return (
    <div className="unit-select">
      <p>Kilometers</p>
      <label className="switch">
        <input type="checkbox" onChange={(e) => callback(e)} />
        <span className="slider round"></span>
      </label>
      <p>Miles</p>
    </div>
  )
}
export default UnitSlider