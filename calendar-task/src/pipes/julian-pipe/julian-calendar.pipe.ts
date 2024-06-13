import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'julianCalendar',
})
export class JulianCalendarPipe implements PipeTransform {
   transform(value: Date): string {
    const newDate: Date = new Date(value);
    const currentDay: number = value.getDate();
    newDate.setDate(currentDay + 14);
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

