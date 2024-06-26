import { Component, inject } from '@angular/core';
import { GetApiService } from '../get-api.service';
import { User } from '../common.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api-response',
  templateUrl: './api-response.component.html',
  styleUrls: ['./api-response.component.scss'],
})
export class ApiResponseComponent {
  protected readonly users$: Observable<User[]> =
    inject(GetApiService).getUsers();
}
