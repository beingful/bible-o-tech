import type { ITransition } from "../iTransition";
import { type ICarouselSlideDirection } from "./iCarouselSlideDirection";
import type { ObservableCarousel } from "./observableCarousel";
import type { ObservableCarouselSlide } from "./observableCarouselSlide";

export class CarouselTransition implements ITransition {
    private readonly _forwardSlideDirection: ICarouselSlideDirection;
    private readonly _reverseSlideDirection: ICarouselSlideDirection;

    private _currentSlideDirection: ICarouselSlideDirection;
    private readonly _slideDirections: ICarouselSlideDirection[];

    constructor(forwardSlideDirection: ICarouselSlideDirection, reverseSlideDirection: ICarouselSlideDirection, carouselSize: number) {
        this._forwardSlideDirection = forwardSlideDirection;
        this._reverseSlideDirection = reverseSlideDirection;
        this._currentSlideDirection = forwardSlideDirection;
        this._slideDirections = Array<ICarouselSlideDirection>(carouselSize).fill(forwardSlideDirection);
    }

    public get name(): string {
        return this._currentSlideDirection.name;
    }

    public apply(carousel: ObservableCarousel): void {
        if (carousel.lastSlide.order <= carousel.currentSlide.order) {
            //this._currentSlideDirection = this._forwardSlideDirection;
            this._slideDirections[carousel.currentSlide.order] = this._forwardSlideDirection;
        }
        else {
            //this._currentSlideDirection = this._reverseSlideDirection;
            this._slideDirections[carousel.currentSlide.order] = this._reverseSlideDirection;
        }
    }

    public getTransition(slide: ObservableCarouselSlide): ITransition {
        return this._slideDirections[slide.order]
    }
}