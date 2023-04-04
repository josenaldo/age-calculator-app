import { useState } from 'react'

import Attribution from '@/components/Attribution'
import DateForm from '@/components/DateForm'
import AgeDisplay from '@/components/AgeDisplay'

import { intervalToDuration } from 'date-fns'

import './App.css'

function App() {
  const [days, setDays] = useState('')
  const [months, setMonths] = useState('')
  const [years, setYears] = useState('')

  const setDate = (day, month, year) => {
    const now = new Date()
    const myDate = new Date(year, month - 1, day)

    const duration = intervalToDuration({
      start: myDate,
      end: now,
    })

    setYears(duration.years)
    setMonths(duration.months)
    setDays(duration.days)
  }

  return (
    <main>
      <article>
        <DateForm setDate={setDate} />
        <AgeDisplay years={years} months={months} days={days} />
      </article>
      <Attribution />
    </main>
  )
}

export default App
