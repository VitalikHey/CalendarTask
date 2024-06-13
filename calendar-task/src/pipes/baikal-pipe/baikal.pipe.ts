import { Pipe, PipeTransform } from '@angular/core';
import { changeCalendar } from '../generals-functions';

@Pipe({
  name: 'baikal',
})
export class BaikalPipe implements PipeTransform {
  transform(value: Date, countDay: number): string {
    return changeCalendar(value, countDay);
  }
}
