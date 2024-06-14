import { Injectable } from '@angular/core';
import {catchError, map, Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Address, User} from './common.types';

@Injectable()
export class GetApiService {
  private readonly url: string = 'http://localhost:3000/users';

  constructor(private readonly http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      map((users: User[]) =>
        users.map((user: User) => new User(user.id, user.name, user.email, new Address(user.address.id, user.address.street, user.address.homeNumber))),
      ),
      catchError((err: unknown) => {
        console.error('Error occurred: ', err);
        return of([]);
      }),
    );
  }
}
