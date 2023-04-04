import { useState } from 'react'

import Attribution from '@/components/Attribution'
import DateForm from '@/components/DateForm'

import { intervalToDuration } from 'date-fns'

import './App.css'

function App() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const setDate = (day, month, year) => {
    const now = new Date()
    const myDate = new Date(year, month - 1, day)

    const duration = intervalToDuration({
      start: myDate,
      end: now,
    })
    console.log('duration', duration)

    setYear(duration.years)
    setMonth(duration.months)
    setDay(duration.days)
  }

  return (
    <div className="container">
      <main>
        <DateForm setDate={setDate} />
        <div className="grid">
          <div>
            <h2>Years</h2>
            <p>{year}</p>
          </div>
          <div>
            <h2>Months</h2>
            <p>{month}</p>
          </div>
          <div>
            <h2>Days</h2>
            <p>{day}</p>
          </div>
        </div>
        <Attribution />
      </main>
    </div>
  )
}

export default App
