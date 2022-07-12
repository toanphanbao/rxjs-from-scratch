import { Subscription } from './Subscription';

export class Observable {
    waitToRun: Function;

    constructor(waitToRun: Function) {
        this.waitToRun = waitToRun;
    }

    static timeout = (miliseconds: number): Observable => {
        const waitToRun = (next: Function): Subscription => {
            const timeoutId = setTimeout(() => {
                next();
            }, miliseconds);

            return new Subscription(() => {
                clearTimeout(timeoutId);
                console.log('unsubscribed timeout');
            });
        };

        return new Observable(waitToRun);
    }

    static interval = (miliseconds: number): Observable => {
        const waitToRun = (next: Function) => {
            const intervalId = setInterval(() => {
                next();
            }, miliseconds);

            return new Subscription(() => {
                clearInterval(intervalId);
                console.log('unsubscribed interval');
            });
        };

        return new Observable(waitToRun);
    }

    subscribe = (next: Function): Subscription => {
        const subscription = this.waitToRun(next);

        return subscription;
    }
}

