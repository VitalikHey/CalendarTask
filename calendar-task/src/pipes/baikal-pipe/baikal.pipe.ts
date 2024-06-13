import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'baikalCalendar',
})
export class BaikalCalendarPipe implements PipeTransform {
  transform(value: Date): string {
    const newDate: Date = new Date(value);
    const currentDay: number = value.getDate();
    newDate.setDate(currentDay + 2);
    return String(
      'Дѣнь ' +
        newDate.getDate() +
        ' Мѣсяцъ ' +
        (newDate.getMonth() + 1) +
        ' Годъ ' +
        newDate.getFullYear(),
    );
  }
}
