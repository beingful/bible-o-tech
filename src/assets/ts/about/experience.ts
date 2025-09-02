import type { Image } from "../image";
import type { TimeSlot } from "../timeSlot";

export class Experience {
    public readonly company: string;
    public readonly position: string;
    public readonly employmentType: string;
    public readonly site: string;
    public readonly responsibilities: string[];
    public readonly timeSlot: TimeSlot;
    public readonly icon: Image;

    constructor(company: string, position: string, employmentType: string, site: string,
        responsibilities: string[], timeSlot: TimeSlot, icon: Image) {
        this.company = company;
        this.position = position;
        this.employmentType = employmentType;
        this.site = site;
        this.responsibilities = responsibilities;
        this.timeSlot = timeSlot;
        this.icon = icon;
    }
}