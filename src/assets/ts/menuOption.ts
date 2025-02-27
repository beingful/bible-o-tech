import { ImageElement } from "./imageElement";

export class MenuOption {
    public readonly description: string;
    public readonly image: ImageElement;

    constructor(description: string, image: ImageElement) {
        this.description = description;
        this.image = image;
    }
}