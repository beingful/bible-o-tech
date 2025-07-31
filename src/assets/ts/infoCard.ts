import { Image } from "./image";

export class InfoCard {
    public  title: string;
    public readonly text: string;
    public readonly image: Image | undefined;

    constructor(title: string, text: string, image: Image | undefined = undefined) {
        this.title = title;
        this.text = text;
        this.image = image;
    }
}