import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'julianCalendar',
})
export class JulianCalendarPipe implements PipeTransform {
  transform(value: Date): string {
    let newDate: Date = new Date(value);
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

// switch (value.getMonth()) {
//   case 1:
//     return 'Просинец'
//   case 2:
//     return 'Сечень'
//   case 3:
//     return 'Сухий'
//   case 4:
//     return 'Березозол'
//   case 5:
//     return 'Травный'
//   case 6:
//     return 'Изок'
//   case 7:
//     return 'Червен'
//   case 8:
//     return 'Зарев'
//   case 9:
//     return 'Ревун'
//   case 10:
//     return 'Листопад'
//   case 11:
//     return 'Груден'
//   case 12:
//     return 'Студеный'
// }
