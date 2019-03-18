import { Directive, Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() {}

  isUsernameUnique(name: string): Observable<boolean> {
    return of(name && name.toLowerCase() !== 'bob').pipe(delay(400));
  }
}

@Injectable({ providedIn: 'root' })
export class UniqueUsernameValidator implements AsyncValidator {
  validate(control: AbstractControl) {
    return this.usersService
      .isUsernameUnique(control.value)
      .pipe(map(isUnique => (isUnique ? null : { userExists: true })));
  }

  constructor(private usersService: UsersService) {}
}

@Directive({
  selector: '[appUniqueUsername]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: UniqueUsernameValidationDirective,
      multi: true
    }
  ]
})
export class UniqueUsernameValidationDirective implements AsyncValidator {
  constructor(private validator: UniqueUsernameValidator) {}

  validate(control: AbstractControl): Observable<any> {
    return this.validator.validate(control);
  }
}
