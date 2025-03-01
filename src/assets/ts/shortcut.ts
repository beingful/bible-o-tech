import { Image } from "./image";

export class Shortcut {
    public readonly description: string;
    public readonly destination: string;
    public readonly image: Image;

    constructor(description: string, destination: string, image: Image) {
        this.description = description;
        this.destination = destination;
        this.image = image;
    }
}