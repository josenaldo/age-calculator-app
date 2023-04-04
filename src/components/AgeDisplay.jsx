import './AgeDisplay.css'

const AgeDisplay = ({ years, months, days }) => {
  return (
    <div className="age-display">
      <div className="years">
        <span className="years-value">{years ? years : '--'}</span>
        <span className="years-label"> years</span>
      </div>

      <div className="months">
        <span className="months-value">{months ? months : '--'}</span>
        <span className="months-label"> months</span>
      </div>

      <div className="days">
        <span className="days-value">{days ? days : '--'}</span>
        <span className="days-label"> days</span>
      </div>
    </div>
  )
}

export default AgeDisplay
