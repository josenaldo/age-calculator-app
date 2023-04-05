import { useState } from 'react'

import Attribution from '@/components/Attribution'
import DateForm from '@/components/DateForm'
import AgeDisplay from '@/components/AgeDisplay'

import { intervalToDuration } from 'date-fns'
import { createHistoricalDate } from '@/utils/dateUtils'

import './App.css'

const App = () => {
  const [age, setAge] = useState(null)

  const setDate = (day, month, year) => {
    const now = new Date()
    const historicalDate = createHistoricalDate(year, month, day)

    const duration = intervalToDuration({
      start: historicalDate,
      end: now,
    })

    setAge({
      days: duration.days,
      months: duration.months,
      years: duration.years,
    })
  }

  return (
    <main>
      <article>
        <DateForm setDate={setDate} />
        <AgeDisplay age={age} />
      </article>
      <Attribution />
    </main>
  )
}

export default App
