import { useState } from 'react'

const DateForm = ({ setDate }) => {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setDate(day, month, year)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid">
        <label>
          Day
          <input
            type="text"
            id="day"
            name="day"
            value={day}
            onChange={({ target }) => setDay(target.value)}
          />
        </label>
        <label>
          Month
          <input
            type="text"
            id="month"
            name="month"
            value={month}
            onChange={({ target }) => setMonth(target.value)}
          />
        </label>
        <label>
          Year
          <input
            type="text"
            id="year"
            name="year"
            value={year}
            onChange={({ target }) => setYear(target.value)}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default DateForm
