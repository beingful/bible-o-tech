import { Image } from "./image";

export class Website {
    public readonly url: string;
    public readonly wallpaper: Image;

    constructor(url: string, wallpaper: Image) {
        this.url = url;
        this.wallpaper = wallpaper;
    }
}