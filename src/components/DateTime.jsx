import PropTypes from 'prop-types';
import withDateTimePretty from '../HOC/withDateTimePretty';

function DateTime({date}) {
  return (
      <p className="date">{date}</p>
  )
}

DateTime.propTypes = {
  date: PropTypes.string
}

const DateTimePretty = withDateTimePretty(DateTime)

export default DateTimePretty;