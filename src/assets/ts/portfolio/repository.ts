import { Image } from "../image";
import { Preview } from "../preview";

export class Repository {
    public readonly preview: Preview;
    public readonly pictures: Image[];
    public readonly gitHubLink: string;
    public readonly language: string;
    
    constructor(title: string, description: string, pictures: Image[], gitHubLink: string, language: string) {
        this.preview = new Preview(
            title,
            description.length > 198 ? `${description.substring(0, 195)}...` : description,
            pictures[0]);
        this.pictures = pictures.slice(1);
        this.gitHubLink = gitHubLink;
        this.language = language;
    }
}