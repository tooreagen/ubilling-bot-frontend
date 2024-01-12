import moment from 'moment';
import { unix } from 'moment';

const dateConverter = timestamp => {
  const dateMoment = unix(timestamp);
  const currentDate = moment();

  // Check if the timestamp occurred today
  if (dateMoment.isSame(currentDate, 'day')) {
    return 'Сьогодні ' + dateMoment.format('HH:mm');
  } else {
    return dateMoment.format('DD.MM.YYYY HH:mm');
  }
};

export default dateConverter;
