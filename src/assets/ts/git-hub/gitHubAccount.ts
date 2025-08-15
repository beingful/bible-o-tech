import { Image } from "../image";
import { Preview } from "./preview";
import { gitHubAccount } from '../../files/json/gitHubAccount.json';
import { ProjectRepository } from "./projectRepository";
import { ContributionCalendar } from "./contributionCalendar";

export class GitHubAccount {
    public readonly profile: Preview;
    public readonly repositories: ProjectRepository[];
    public readonly contributionCalendar: ContributionCalendar;
    
    constructor() {
        this.profile = this.populateProfile();
        this.repositories = this.populateRepositories();
        this.contributionCalendar = new ContributionCalendar();
    }

    private populateProfile(): Preview {
        return new Preview(
            gitHubAccount.profile.id,
            gitHubAccount.profile.name,
            new Image(gitHubAccount.profile.picture)
        );
    }

    private populateRepositories(): ProjectRepository[] {
        return gitHubAccount.repositories
            .map(repository => {
                const projectGallery: Image[] = repository.images
                    .map(image => new Image(image));
                
                return new ProjectRepository(
                    repository.title,
                    repository.text,
                    projectGallery);
            });
    }
}