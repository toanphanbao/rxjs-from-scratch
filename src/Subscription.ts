export class Subscription {
    unsubscribe: Function;
    constructor(unsubscribe: Function) {
        this.unsubscribe = unsubscribe;
    }
}