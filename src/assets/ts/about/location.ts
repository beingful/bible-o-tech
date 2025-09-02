export class Location {
    public readonly country: string;
    public readonly city: string;
    public readonly state: string | null;

    constructor(country: string, city: string, state: string | null = null) {
        this.country = country;
        this.city = city;
        this.state = state;
    }
}