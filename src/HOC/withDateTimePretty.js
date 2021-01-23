import { formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';

const withDateTimePretty = (Component) => {
  const DateTimePretty = ({date}) => {
    const result = formatDistance(
      new Date(date),
      new Date(Date.now()),
      {locale: ru} 
    )
    return <Component date={result} />
  }
  return DateTimePretty;
}

export default withDateTimePretty;