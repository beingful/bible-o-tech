import { FileExplorer } from "./fileExplorer";

export class ImageElement {
    public readonly path: string;
    public readonly alt: string;

    constructor(fileName: string, alt: string) {
        this.path = new FileExplorer(import.meta.url)
            .goUp().goUp()
            .goTo(FileExplorer.Directories.imageStorage)
            .getPath(fileName);
        this.alt = alt;
    }
}