import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCalendarComponent } from '../task-calendar/task-calendar.component';
import { JulainPipe } from '../../pipes/calendar-pipe/julian.pipe';
import { FormsModule } from '@angular/forms';
import { BaikalPipe } from '../../pipes/baikal-pipe/baikal.pipe';

@NgModule({
  declarations: [BaikalPipe, JulainPipe, AppComponent, TaskCalendarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
