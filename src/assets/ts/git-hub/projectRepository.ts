import { Image } from "../image";
import { Preview } from "./preview";

export class ProjectRepository {
    public readonly preview: Preview;
    public readonly pictures: Image[];
    
    constructor(title: string, description: string, pictures: Image[]) {
        this.preview = new Preview(
            title,
            description.length > 198 ? `${description.substring(0, 195)}...` : description,
            pictures[0]);
        this.pictures = pictures.slice(1);
    }
}