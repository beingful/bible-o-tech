import type { Image } from "../image";
import type { TimeSlot } from "../timeSlot";

export class Education {
    public readonly establishment: string;
    public readonly major: string;
    public readonly degree: string;
    public readonly timeSlot: TimeSlot;
    public readonly icon: Image;

    constructor(establishment: string, major: string, degree: string, timeSlot: TimeSlot, icon: Image) {
        this.establishment = establishment;
        this.major = major;
        this.degree = degree;
        this.timeSlot = timeSlot;
        this.icon = icon;
    }
}