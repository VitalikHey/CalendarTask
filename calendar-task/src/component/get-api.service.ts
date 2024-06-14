import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Address, User } from './common.types';

@Injectable()
export class GetApiService {
  private readonly url: string = 'http://localhost:3000/users';
  private readonly urlAddress: string = 'http://localhost:3000/address';

  constructor(private readonly http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      catchError((err: unknown) => {
        console.error('Error occurred: ', err);
        return of([]);
      }),
    );
  }
  public getAddress(): Observable<Address> {
    return this.http.get<Address>(this.urlAddress).pipe(
      catchError((err: unknown) => {
        console.error('Error occurred ', err);
        return of();
      }),
    );
  }
}
