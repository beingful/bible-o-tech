export class Frame {
    public readonly style: string;
    public readonly header: string;
    public readonly content: string;

    constructor(style: string, header: string, content: string) {
        this.style = style;
        this.header = header;
        this.content = content;
    }
}