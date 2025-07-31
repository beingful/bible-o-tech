import type { ICarouselSlideDirection } from './iCarouselSlideDirection';

export class CarouselSlideBottomUp implements ICarouselSlideDirection {
    private readonly _name: string = "bottomup";

    public get name(): string {
        return this._name;
    }
}