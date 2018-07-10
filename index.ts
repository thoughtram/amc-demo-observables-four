import {Observable, of} from 'rxjs'
import {distinctUntilChanged} from 'rxjs/operators'

let myObservable = of(1, 2, 2, 3);

myObservable
  .pipe(
    distinctUntilChanged(),
  )
  .subscribe(
    val   => console.log(val),
    error    => console.error(error),
    () => console.log('completed')
  );