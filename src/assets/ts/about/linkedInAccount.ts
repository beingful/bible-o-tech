import { ContactMethod } from './contactMethod';
import { Education } from './education';
import { Experience } from './experience';
import { Image } from "../image";
import { Candidacy } from './candidacy';
import { TimeSlot } from '../timeSlot';
import { Website } from '../website';
import { linkedInAccount } from '../../json/about/linkedInAccount.json';
import type { Location } from './location';
import type { Skill } from './skill';

export class LinkedInAccount {
    public readonly candidacy: Candidacy;
    public readonly location: Location;
    public readonly contactMethods: ContactMethod[];
    public readonly education: Education[];
    public readonly experience: Experience[];
    public readonly skills: Skill[];
    public readonly website: Website;

    constructor() {
            this.candidacy = this.parseCandidacy();
            this.location = linkedInAccount.location;
            this.contactMethods = this.parseContactMethods();
            this.education = this.parseEducation();
            this.experience = this.parseExperience();
            this.skills = linkedInAccount.skills;
            this.website = this.parseWebsite();
        }

    private parseCandidacy() : Candidacy {
        return new Candidacy(
            linkedInAccount.candidacy.name,
            linkedInAccount.candidacy.position,
            linkedInAccount.candidacy.bio,
            new Image(linkedInAccount.candidacy.picture));
    }

    private parseContactMethods() : ContactMethod[] {
        return linkedInAccount.contactMethods.map(contactMethod => {
            return new ContactMethod(
                contactMethod.name,
                contactMethod.detail,
                new Image(contactMethod.icon));
        });
    }

    private parseEducation() : Education[] {
        return linkedInAccount.education.map(education => {
            return new Education(
                education.establishment,
                education.major,
                education.degree,
                new TimeSlot(
                    new Date(education.startDate),
                    education.endDate == undefined ? null : new Date(education.endDate)),
                new Image(education.icon));
        });
    }

    private parseExperience() : Experience[] {
        return linkedInAccount.experience.map(experience => {
            return new Experience(
                experience.company,
                experience.position,
                experience.employmentType,
                experience.site,
                experience.responsibilities,
                new TimeSlot(
                    new Date(experience.startDate),
                    experience.endDate == undefined ? null : new Date(experience.endDate)),
                new Image(experience.icon));
        });
    }

    private parseWebsite() : Website {
        return new Website(
            linkedInAccount.website.url,
            new Image(linkedInAccount.website.wallpaper));
    }
}