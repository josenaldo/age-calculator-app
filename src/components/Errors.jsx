import PropTypes from 'prop-types'
import './Errors.css'

const Errors = ({ error }) => {
  if (!error) return null

  return <span className="errors">{error.message}</span>
}

Errors.propTypes = {
  error: PropTypes.object,
}

export default Errors
