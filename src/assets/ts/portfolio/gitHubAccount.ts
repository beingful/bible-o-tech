import { Image } from "../image";
import { Preview } from "../preview";
import { Repository } from "./repository";
import { ContributionCalendar } from "./contributionCalendar";
import { gitHubAccount } from '../../json/gitHubAccount.json';

export class GitHubAccount {
    public readonly profile: Preview;
    public readonly repositories: Repository[];
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

    private populateRepositories(): Repository[] {
        return gitHubAccount.repositories
            .map(repository => {
                const projectGallery: Image[] = repository.images
                    .map(image => new Image(image));
                
                return new Repository(
                    repository.title,
                    repository.text,
                    projectGallery,
                    repository.link,
                    repository.language);
            });
    }
}