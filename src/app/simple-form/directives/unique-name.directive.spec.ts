import { UniqueNameDirective } from './unique-name.directive';
import { of, Observable } from 'rxjs';

fdescribe('UniqueNameDirective', () => {
  const bob = 'bob';
  const alice = 'alice';

  const service = {
    userExist(name: string): Observable<boolean> {
      return of(name && name.toLowerCase() === bob);
    }
  };

  it('should create an instance', () => {
    const directive = new UniqueNameDirective(service as any);
    expect(directive).toBeTruthy();
  });
});
