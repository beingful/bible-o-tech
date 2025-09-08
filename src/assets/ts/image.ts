import { Asset } from "./asset";
import { FileExplorer } from "./fileExplorer";

export class Image extends Asset {
    public readonly alt: string;

    constructor(relativePath: string, alt: string | null = null) {
        super(FileExplorer.Directories.imageStorage, relativePath);

        this.alt = alt ?? this.path.substring(this.path.lastIndexOf("/") + 1);
    }
}