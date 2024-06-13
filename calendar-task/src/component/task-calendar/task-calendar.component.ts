import { Component } from '@angular/core';

@Component({
  selector: 'app-task-calendar',
  templateUrl: './task-calendar.component.html',
  styleUrls: ['./task-calendar.component.scss'],
})
export class TaskCalendarComponent {
  protected date: Date = new Date();

  protected handleClickButton(countDay: number): void {
    const newDate: Date = new Date(this.date);
    const currentDay: number = newDate.getDate();
    newDate.setDate(currentDay + countDay);
    this.date = newDate;
  }
}
