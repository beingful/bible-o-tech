import type { CarouselSlide } from "./carouselSlide";

export class Carousel {
    public readonly slides: CarouselSlide[];

    private _lastSlide: CarouselSlide;
    private _currentSlide: CarouselSlide;

    constructor(slides: CarouselSlide[]) {
        this.slides = slides;
        this._lastSlide = slides[0];
        this._currentSlide = slides[0];
    }

    public get lastSlide(): CarouselSlide {
        return this._lastSlide;
    }

    public get currentSlide(): CarouselSlide {
        return this._currentSlide;
    }

    public canGoToPrevious() {
        return this._currentSlide.order > 0;
    }

    public goToPrevious() {
        this.goTo(this._currentSlide.order - 1);
    }

    public canGoToNext() {
        return this._currentSlide.order < this.slides.length - 1;
    }
    
    public goToNext(): void {
        this.goTo(this._currentSlide.order + 1);
    }
    
    private goTo(slideId: number): void {
        const nextItem = this.slides[slideId];

        this._lastSlide = this._currentSlide;
        this._currentSlide = nextItem;
    }
}