import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCalendarComponent } from '../task-calendar/task-calendar.component';
import { CalendarPipe } from '../../pipes/calendar-pipe/calendar.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CalendarPipe,
    AppComponent,
    TaskCalendarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
