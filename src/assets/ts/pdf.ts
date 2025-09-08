import { Asset } from "./asset";
import { FileExplorer } from "./fileExplorer";

export class Pdf extends Asset {
    constructor(relativePath: string) {
        super(FileExplorer.Directories.pdfStorage, relativePath);
    }
}