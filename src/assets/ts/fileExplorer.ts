export class FileExplorer {
    private readonly _currentPath: string;
    private readonly _separator: string = '/';

    constructor(currentPath: string) {
        this._currentPath = currentPath;
    }

    public goUp(): FileExplorer {
        const parentDirectoryPath: string = this._currentPath
            .split(this._separator)
            .slice(0, -1)
            .join(this._separator);

        return new FileExplorer(parentDirectoryPath);
    }

    public goTo(childDirectory: string): FileExplorer {
        return new FileExplorer(this._currentPath + this._separator + childDirectory);
    }

    public getPath(fileName: string): string {
        return this._currentPath + fileName;
    }

    public static Directories = class {
        public static readonly imageStorage: string = 'images';
        public static readonly pdfStorage: string = 'pdf';  
    }
}