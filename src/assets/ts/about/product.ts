import { Image } from "../image";

export class Product {
    public readonly image: Image;

    constructor(image: Image) {
        this.image = image;
    } 
}