import { Directive } from '@angular/core';
import {
  NG_ASYNC_VALIDATORS,
  AsyncValidator,
  AbstractControl
} from '@angular/forms';
import { Observable } from 'rxjs';
import { validateUniqueName } from 'src/app/validators/username.validator';
import { UsersService } from 'src/app/services/users.service';

@Directive({
  selector: '[appUniqueName]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: UniqueNameDirective,
      multi: true
    }
  ]
})
export class UniqueNameDirective implements AsyncValidator {
  validate(control: AbstractControl): Observable<any> {
    return validateUniqueName(this.usersService)(control) as any;
  }

  constructor(private usersService: UsersService) {}
}
