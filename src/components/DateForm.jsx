import { useForm } from 'react-hook-form'
import { useMediaQuery } from 'usehooks-ts'
import { isValid, parse } from 'date-fns'
import { enGB } from 'date-fns/locale'

import Errors from '@/components/Errors'

import './DateForm.css'
import { ReactComponent as ArrowIcon } from '@/assets/images/icon-arrow.svg'

const DateForm = ({ setDate }) => {
  const matches = useMediaQuery('(min-width: 767px)')

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const day = parseInt(data.day)
    const month = parseInt(data.month)
    const year = parseInt(data.year)

    const parsedDate = parse(`${day}/${month}/${year}`, 'P', new Date(), {
      locale: enGB,
    })
    const isValidDate = isValid(parsedDate)

    if (isValidDate) {
      clearErrors()
      setDate(data.day, data.month, data.year)
    } else {
      setError('day', {
        type: 'manual',
        message: 'Must be a valid date',
      })
      setError('month', { type: 'manual' })
      setError('year', { type: 'manual' })
    }
  }

  return (
    <form className="date-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid">
        <div className={`form-control ${errors && errors?.day ? 'error' : ''}`}>
          <label>Day</label>
          <input
            placeholder="DD"
            {...register('day', {
              required: { value: true, message: 'This field is required' },
              min: { value: 1, message: 'Must be a valid day' },
              max: { value: 31, message: 'Must be a valid day' },
              validate: {
                isNumber: (value) => {
                  return !isNaN(value) || 'Must be a valid day'
                },
              },
            })}
          />
          <Errors error={errors.day} />
        </div>

        <div
          className={`form-control ${errors && errors?.month ? 'error' : ''}`}
        >
          <label>Month</label>
          <input
            aria-invalid={errors && errors?.month ? 'true' : 'false'}
            placeholder="MM"
            {...register('month', {
              required: { value: true, message: 'This field is required' },
              min: { value: 1, message: 'Must be a valid month' },
              max: { value: 12, message: 'Must be a valid month' },
              validate: {
                isNumber: (value) => {
                  return !isNaN(value) || 'Must be a valid month'
                },
              },
            })}
          />
          <Errors error={errors.month} />
        </div>
        <div
          className={`form-control ${errors && errors?.year ? 'error' : ''}`}
        >
          <label>Year</label>
          <input
            placeholder="YYYY"
            {...register('year', {
              required: { value: true, message: 'This field is required' },
              max: {
                value: new Date().getFullYear(),
                message: 'Must be in the past',
              },
              validate: {
                isNumber: (value) => {
                  return !isNaN(value) || 'Must be a valid year'
                },
              },
            })}
          />
          <Errors error={errors.year} />
        </div>
        {matches && <div className="form-control"></div>}
      </div>
      <div className="submit-wrapper">
        <button id="submit-button" type="submit" className="primary">
          <ArrowIcon />
        </button>
      </div>
    </form>
  )
}

export default DateForm
