import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() {}

  userExist(name: string): Observable<boolean> {
    return of(name && name.toLowerCase() === 'bob').pipe(delay(1500));
  }
}
