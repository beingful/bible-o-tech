import type { InfoCard } from "../infoCard";
import type { IObservableEntry } from "../observation/iObservableEntry";
import type { ITransition } from "../observation/iTransition";
import type { CarouselSlideTransition } from "./carouselSlideTransition";
import { CarouselSlide } from "./carouselSlide";

export class ObservableCarouselSlide extends CarouselSlide implements IObservableEntry {
    private readonly _transition: CarouselSlideTransition;
    private _active: boolean;

    constructor(order: number, content: InfoCard, transition: CarouselSlideTransition, active: boolean = false) {
        super(order, content);
        this._transition = transition;
        this._active = active;
    }

    public get id(): string {
        return this.order.toString();
    }

    public get active(): boolean {
        return this._active;
    }

    public get transition(): ITransition {
        return this._transition;
    }

    public watch(): void {
        this._active = true;
        this._transition.apply(this);
    }

    public unwatch(): void {
        this._active = false;
    }
}