import { Observable } from './Observable';

const timeoutObservable$ = Observable.timeout(500);
const timeoutSubscription = timeoutObservable$.subscribe();
setTimeout(timeoutSubscription.unsubscribe, 1000);

const intervalObservable$ = Observable.interval(500);
const intervalSubscription = intervalObservable$.subscribe();
setTimeout(intervalSubscription.unsubscribe, 6000);