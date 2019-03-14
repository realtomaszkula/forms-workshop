import {
  AsyncValidator,
  AbstractControl,
  AsyncValidatorFn
} from '@angular/forms';
import { Injectable } from '@angular/core';
import { UsersService } from '../services/users.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueNameValidator implements AsyncValidator {
  constructor(private usersService: UsersService) {}

  validate(control: AbstractControl) {
    console.log('async UniqueNameValidator called for', control.value);
    return null;
  }
}

export function validateUniqueName(
  userService: UsersService
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<any> => {
    return userService
      .userExist(control.value)
      .pipe(map(value => (value ? { userExists: true } : null)));
  };
}
