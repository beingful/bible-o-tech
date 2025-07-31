import type { ITransition } from '../iTransition';

export class CarouselSlideTopDown implements ITransition {
    private readonly _name: string = "topdown";

    public get name(): string {
        return this._name;
    }
}