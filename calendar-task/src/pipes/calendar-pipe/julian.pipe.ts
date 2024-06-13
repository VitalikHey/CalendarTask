import { Pipe, PipeTransform } from '@angular/core';
import { changeCalendar } from '../generals-functions';

@Pipe({
  name: 'julian',
})
export class JulainPipe implements PipeTransform {
  transform(value: Date, countDay: number): string {
    return changeCalendar(value, countDay);
  }
}
