import { Pipe, PipeTransform } from '@angular/core';
import { changeCalendar } from '../generals-functions';

@Pipe({
  name: 'julian',
})
export class JulianPipe implements PipeTransform {
  transform(value: Date): string {
    return changeCalendar(value, 14);
  }
}
