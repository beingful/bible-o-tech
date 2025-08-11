import { Image } from "./image";

export class InfoCard {
    public  title: string;
    public readonly text: string;
    public readonly gallery: Image[] | null;

    constructor(title: string, text: string, gallery: Image[] | null = null) {
        this.title = title;
        this.text = text;
        this.gallery = gallery;
    }
}