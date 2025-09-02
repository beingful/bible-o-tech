import { Image } from "../image";

export class Candidacy {
    public readonly name: string;
    public readonly title: string;
    public readonly bio: string;
    public readonly picture: Image;
    
    constructor(name: string, title: string, bio: string, picture: Image) {
        this.name = name;
        this.title = title;
        this.bio = bio;
        this.picture = picture;
    }
}