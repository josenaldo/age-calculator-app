const AgeDisplay = ({ years, months, days }) => {
  return (
    <div>
      <h2>Years {years ? years : '--'} </h2>
      <h2>Months {months ? months : '--'} </h2>
      <h2>Days {days ? days : '--'} </h2>
    </div>
  )
}

export default AgeDisplay
