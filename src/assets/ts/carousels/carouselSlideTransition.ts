import type { ITransition } from "../iTransition";
import type { CarouselTransition } from "./carouselTransition";
import type { ObservableCarouselSlide } from "./observableCarouselSlide";

export class CarouselSlideTransition implements ITransition {
    private readonly _carouselTransition: CarouselTransition;

    private _currentTransition: ITransition;

    constructor(carouselTransition: CarouselTransition) {
        this._carouselTransition = carouselTransition;
        this._currentTransition = carouselTransition;
    }

    public get name(): string {
        return this._currentTransition.name;
    }

    public apply(slide: ObservableCarouselSlide): void {
        this._currentTransition = this._carouselTransition.getTransition(slide);
    }
}