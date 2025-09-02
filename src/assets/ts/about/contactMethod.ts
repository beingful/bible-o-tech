import { Image } from "../image";

export class ContactMethod {
    public readonly name: string;
    public readonly detail: string;
    public readonly icon: Image;

    constructor(name: string, detail: string, icon: Image) {
        this.name = name;
        this.detail = detail;
        this.icon = icon;
    }
}