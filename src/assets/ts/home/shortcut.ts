import { Image } from "../image";

export class Shortcut {
    public readonly name: string;
    public readonly destination: string;
    public readonly image: Image;

    constructor(name: string, destination: string, image: Image) {
        this.name = name;
        this.destination = destination;
        this.image = image;
    }
}