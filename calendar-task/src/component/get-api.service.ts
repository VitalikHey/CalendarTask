import {Injectable} from '@angular/core';
import {catchError, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "./common.types";


@Injectable()
export class GetApiService {
  private readonly url: string = 'http://lcalhost:3000/users'

  constructor(private readonly http: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
      .pipe(
        catchError((err: object) => {
          console.error('Error occurred: ', err);
          return of([]);
        })
      );
  }
}
