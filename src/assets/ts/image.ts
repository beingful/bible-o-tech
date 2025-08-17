import { FileExplorer } from "./fileExplorer";

export class Image {
    public readonly path: string;
    public readonly alt: string;

    constructor(relativePath: string, alt: string | null = null) {
        this.path = new FileExplorer(import.meta.url)
            .goUp().goUp()
            .goTo(FileExplorer.Directories.imageStorage)
            .getPath(relativePath);
        this.alt = alt ?? this.path.substring(this.path.lastIndexOf("/") + 1);
    }
}