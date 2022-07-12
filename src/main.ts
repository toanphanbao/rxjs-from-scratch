import { Observable } from './Observable';

const timeoutObservable$ = Observable.timeout(500);
const timeoutSubscription = timeoutObservable$
    .subscribe(() => console.log('subscribed'));
setTimeout(timeoutSubscription.unsubscribe, 1000);

const intervalObservable$ = Observable.interval(500);
let time = 0;
const intervalSubscription = intervalObservable$
    .subscribe(() => {
        console.log(time);
        time += 500;
    });
setTimeout(intervalSubscription.unsubscribe, 6000);