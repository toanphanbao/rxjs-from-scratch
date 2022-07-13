import { Observer } from './Observer';
import { Subscription } from './Subscription';

export class Observable {
    waitToRun: (observer: Observer) => Subscription;

    constructor(waitToRun: (observer: Observer) => Subscription) {
        this.waitToRun = waitToRun;
    }

    static timeout = (miliseconds: number): Observable => {
        const waitToRun = (observer: Observer): Subscription => {
            const timeoutId = setTimeout(() => {
                observer.next();
                observer.complete();
            }, miliseconds);

            return new Subscription(() => {
                clearTimeout(timeoutId);
                console.log('unsubscribed Timeout Observables');
            });
        };

        return new Observable(waitToRun);
    }

    static interval = (miliseconds: number): Observable => {
        const waitToRun = (observer: Observer): Subscription => {
            const intervalId = setInterval(() => {
                try {
                    observer.next();
                } catch (error) {
                    observer.error(error);
                }
            }, miliseconds);

            return new Subscription(() => {
                clearInterval(intervalId);
                console.log('unsubscribed Interval Observable');
            });
        };

        return new Observable(waitToRun);
    }

    subscribe = (observer: Observer): Subscription => {
        const subscription = this.waitToRun(observer);

        return subscription;
    }
}

