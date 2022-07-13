export class Observer {
    public next: Function;
    public error: (error: Error) => void;
    public complete?: Function;

    public constructor(init?:Partial<Observer>) {
        Object.assign(this, init);
    }
}