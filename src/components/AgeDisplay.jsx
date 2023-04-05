import './AgeDisplay.css'

const AgeDisplay = ({ years, months, days }) => {
  return (
    <div className="age-display">
      <div>
        <span className="value">{years ? years : '--'}</span>
        <span> years</span>
      </div>

      <div>
        <span className="value">{months ? months : '--'}</span>
        <span> months</span>
      </div>

      <div>
        <span className="value">{days ? days : '--'}</span>
        <span> days</span>
      </div>
    </div>
  )
}

export default AgeDisplay
