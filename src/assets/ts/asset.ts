import { FileExplorer } from "./fileExplorer";

export class Asset {
    public readonly path: string;

    constructor(rootDirectory: string, relativePath: string) {
        this.path = new FileExplorer(import.meta.url)
            .goUp().goUp()
            .goTo(rootDirectory)
            .getPath(relativePath);
    }
}