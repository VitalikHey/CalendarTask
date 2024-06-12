import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCalendarComponent } from '../task-calendar/task-calendar.component';
import { JulianCalendarPipe } from '../../pipes/julian-pipe/julian-calendar.pipe';
import { BaikalCalendarPipe } from '../../pipes/baikal-pipe/baikal.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BaikalCalendarPipe,
    JulianCalendarPipe,
    AppComponent,
    TaskCalendarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
