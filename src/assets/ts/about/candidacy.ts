import { Image } from "../image";
import type { Pdf } from "../pdf";

export class Candidacy {
    public readonly name: string;
    public readonly title: string;
    public readonly bio: string;
    public readonly picture: Image;
    public readonly resume: Pdf;
    
    constructor(name: string, title: string, bio: string, picture: Image, resume: Pdf) {
        this.name = name;
        this.title = title;
        this.bio = bio;
        this.picture = picture;
        this.resume = resume;
    }
}