import moment from 'moment';
import {DateProvider} from './DateProvider';

export class DateService extends DateProvider {
  constructor(date: Date) {
    super(date);
  }

  public get(): Date {
    return this.date;
  }

  public display(): string {
    return moment(this.date).format('dddd, MMM D');
  }

  public static timeRemaining(minutes: number): string {
    const duration = moment.duration(minutes, 'minutes');
    const hours = duration.hours();
    const minutesData = duration.minutes();

    return `${hours}h ${minutesData}m`;
  }

  public displayTime(): string {
    return moment(this.date).format('HH:mm');
  }
}
