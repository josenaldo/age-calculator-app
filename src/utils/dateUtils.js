/**
 * Creates a new Date instance with a year, month, and day, that can
 * represent years before 1900 or dates before the Common Era.
 *
 * @param {number} year - The year number.
 * @param {number} month - The month number (0-11).
 * @param {number} day - The day number.
 * @returns {Date} - A Date instance with the given year, month, and day.
 * @example
 * const historicalDate = createHistoricalDate(-753, 3, 15) // Returns a Date instance for March 15, 753 BCE
 */
const createHistoricalDate = (year, month, day) => {
  const referenceDate = new Date(1970, 0, 1)
  const targetDate = new Date(referenceDate.getTime())
  targetDate.setFullYear(year, month - 1, day)

  return targetDate
}

export { createHistoricalDate }
