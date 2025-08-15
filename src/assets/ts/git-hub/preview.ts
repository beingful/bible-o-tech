import { Image } from "../image";

export class Preview {
    public readonly title: string;
    public readonly description: string;
    public readonly picture: Image;
    
    constructor(title: string, description: string, picture: Image) {
        this.title = title;
        this.description = description;
        this.picture = picture;
    }
}