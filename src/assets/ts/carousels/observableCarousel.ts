import type { IObservableRoot } from "../observation/iObservableRoot";
import { Carousel } from "./carousel";
import type { CarouselTransition } from "./carouselTransition";
import type { ObservableCarouselSlide } from "./observableCarouselSlide";

export class ObservableCarousel extends Carousel implements IObservableRoot {
    private readonly _id: string;
    private readonly _slides: ObservableCarouselSlide[];
    private readonly _transition: CarouselTransition;

    constructor(id: string, slides: ObservableCarouselSlide[], transition: CarouselTransition) {
        super(slides);
        this._id = id;
        this._slides = slides;
        this._transition = transition;
    }

    public get id(): string {
        return this._id;
    }

    public get entries(): ObservableCarouselSlide[] {
        return this._slides;
    }

    public get current(): ObservableCarouselSlide {
        return this._slides[this.currentSlide.order];
    }

    public watch(slideId: string): void {
        const slideNumber: number = parseInt(slideId);

        if (slideNumber > this.currentSlide.order) {
            this.slideForwardTo(slideNumber)
        } else if (slideNumber < this.currentSlide.order) {
            this.slideBackwardTo(slideNumber)
        }
    }

    private slideForwardTo(targetSlide: number): void {
        while (this.canSlideForwardTo(targetSlide)) {
            this.goToNext();
            this.slide();
        }
    }

    private canSlideForwardTo(targetSlide: number) {
        return this.currentSlide.order != targetSlide && this.canGoToNext();
    }

    private slideBackwardTo(targetSlide: number): void {
        while (this.canSlideBackwardTo(targetSlide)) {
            this.goToPrevious();
            this.slide();
        }
    }

    private canSlideBackwardTo(targetSlide: number) {
        return this.currentSlide.order != targetSlide && this.canGoToPrevious();
    }

    private slide(): void {
        this._transition.apply(this);

        this._slides[this.lastSlide.order].unwatch();
        this._slides[this.currentSlide.order].watch();
    }
}