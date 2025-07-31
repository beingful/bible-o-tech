import { InfoCard } from "../infoCard";

export class CarouselSlide {
    public readonly order: number;
    public readonly content: InfoCard;

    constructor(order: number, content: InfoCard) {
        this.order = order;
        this.content = content;
    }
}