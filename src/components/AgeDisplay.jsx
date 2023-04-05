import React from 'react'
import PropTypes from 'prop-types'

import './AgeDisplay.css'

const AgeDisplay = ({ age }) => {
  const [years, setYears] = React.useState(null)
  const [months, setMonths] = React.useState(null)
  const [days, setDays] = React.useState(null)

  const yearsInterval = React.useRef(null)
  const monthsInterval = React.useRef(null)
  const daysInterval = React.useRef(null)

  React.useEffect(() => {
    if (!age) return
    if (!age.years && !age.months && !age.days) return

    const { years, months, days } = age

    if (years) {
      let currentYear = 0
      yearsInterval.current = setInterval(() => {
        if (currentYear === years) {
          clearInterval(yearsInterval.current)
          return
        }
        currentYear++
        setYears(currentYear)
      }, 1000 / years)
    }

    if (months) {
      let currentMonth = 0
      monthsInterval.current = setInterval(() => {
        if (currentMonth === months) {
          clearInterval(monthsInterval.current)
          return
        }
        currentMonth++
        setMonths(currentMonth)
      }, 1000 / months)
    }

    if (days) {
      let currentDay = 0
      daysInterval.current = setInterval(() => {
        if (currentDay === days) {
          clearInterval(daysInterval.current)
          return
        }
        currentDay++
        setDays(currentDay)
      }, 1000 / days)
    }

    return () => {
      if (yearsInterval.current) clearInterval(yearsInterval.current)
      if (monthsInterval.current) clearInterval(monthsInterval.current)
      if (daysInterval.current) clearInterval(daysInterval.current)
    }
  }, [age])

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

AgeDisplay.propTypes = {
  age: PropTypes.shape({
    years: PropTypes.number,
    months: PropTypes.number,
    days: PropTypes.number,
  }),
}

export default AgeDisplay
