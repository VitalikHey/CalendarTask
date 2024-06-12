import { Component } from '@angular/core';

@Component({
  selector: 'app-task-calendar',
  templateUrl: './task-calendar.component.html',
  styleUrls: ['./task-calendar.component.scss'],
})
export class TaskCalendarComponent {
  public date: Date = new Date();

  public handleClickButton(isIncrement: boolean): void {
    let newDate: Date = new Date(this.date);
    let currentDay: number = newDate.getDate();
    newDate.setDate(isIncrement ? currentDay + 1 : currentDay - 1);
    this.date = newDate;
  }
}
