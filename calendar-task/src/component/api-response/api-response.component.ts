import {Component, OnInit} from '@angular/core';
import {GetApiService, User} from "../get-api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-api-response',
  templateUrl: './api-response.component.html',
  styleUrls: ['./api-response.component.scss']
})
export class ApiResponseComponent implements OnInit {
  public users$?: Observable<User[]>

  constructor(private userService: GetApiService) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}
