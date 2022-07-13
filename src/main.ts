import { Observable } from './Observable';
import { Observer } from './Observer';

/*
    Timeout Observable
*/
const timeoutObservable$ = Observable.timeout(500);
const timeoutObserver = new Observer({
    next: () => console.log('next'),
    error: (error: Error) => console.log(error.message),
    complete: () => console.log('complete')
});
const timeoutSubscription = timeoutObservable$
    .subscribe(timeoutObserver);

setTimeout(timeoutSubscription.unsubscribe, 1000);

/*
    Interval Observable
*/
const intervalObservable$ = Observable.interval(500);
let time = 0;
const random = Math.floor(Math.random() * 10);
const intervalSubscription = intervalObservable$
    .subscribe({
        next: () => {
            console.log(`Time: ${++time}`);
            if (time > random) {
                throw new Error('testing Observabe error handling');
            }
        },
        error: (error: Error) => {
            console.log('Error occurred!');
            console.log(error.message);
        }
    });
setTimeout(intervalSubscription.unsubscribe, 6000);