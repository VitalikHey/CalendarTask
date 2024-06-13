import {Injectable} from '@angular/core';
import {catchError, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface User {
  id: number,
  name: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  private url: string = 'http://localhost:3000/users'
  private users$: Observable<User[]> = this.http.get<User[]>(this.url)

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.users$
      .pipe(
        catchError(err => {
          console.log('Error occurred: ', err);
          return of([]);
        })
      );
  }
}
