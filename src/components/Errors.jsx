import './Errors.css'
const Errors = ({ error }) => {
  if (!error) return null

  return <span className="errors">{error.message}</span>
}

export default Errors
