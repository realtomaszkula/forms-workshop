import { FormControl } from '@angular/forms';
import { validateUniqueName } from './username-unique.validator';
import { of, Observable } from 'rxjs';

describe('usernameValidator', () => {
  const bob = 'bob';
  const alice = 'alice';

  const service = {
    userExist(name: string): Observable<boolean> {
      return of(name && name.toLowerCase() === bob);
    }
  };

  it('should fail for bob', done => {
    const control = new FormControl(bob);
    const validator = validateUniqueName(service);
    const obs = validator(control) as any;
    obs.subscribe(val => {
      expect(val).toEqual({ userExists: true });
      done();
    });
  });

  it('should pass for alice', done => {
    const control = new FormControl(alice);
    const validator = validateUniqueName(service);
    const obs = validator(control) as any;
    obs.subscribe(val => {
      expect(val).toBeNull();
      done();
    });
  });
});
