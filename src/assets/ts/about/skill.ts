export class Skill {
    public readonly category: string;
    public readonly technologies: string[];

    constructor(category: string, technologies: string[]) {
        this.category = category,
        this.technologies = technologies;
    }
}