import { Component } from '@angular/core';

@Component({
  selector: 'app-task-calendar',
  templateUrl: './task-calendar.component.html',
  styleUrls: ['./task-calendar.component.scss'],
})
export class TaskCalendarComponent {
  protected date: Date = new Date();

  protected handleClickButton(isIncrement: boolean): void {
    const newDate: Date = new Date(this.date);
    const currentDay: number = newDate.getDate();
    newDate.setDate(isIncrement ? currentDay + 1 : currentDay - 1);
    this.date = newDate;
  }
}
