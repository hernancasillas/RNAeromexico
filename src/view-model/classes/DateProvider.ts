export abstract class DateProvider {
  protected date: Date;

  constructor(date: Date) {
    this.date = date;
  }

  abstract get(): Date;

  abstract display(): string;

  static timeRemaining(minutes: number): string {
    console.log(minutes);
  }

  abstract displayTime(date: Date): string;
}
