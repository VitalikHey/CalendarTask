import { Pipe, PipeTransform } from '@angular/core';
import { changeCalendar } from '../generals-functions';

@Pipe({
  name: 'julian',
})
export class JulainPipe implements PipeTransform {
  transform(value: Date, isJulian: boolean): string {
    return changeCalendar(value, isJulian);
  }
}
