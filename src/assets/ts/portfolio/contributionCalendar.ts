export class ContributionCalendar {
    public readonly daysOfWeek: string[];
    public readonly months: string[];
    public readonly contributions: Int8Array;
    public readonly productivity: number;

    private readonly _contributionsVariety = 4;

    constructor() {
        this.daysOfWeek = this.populateDaysOfWeek();
        this.months = this.populateMonths();
        [this.productivity, this.contributions] = this.populateContributions();
    }

    private populateDaysOfWeek(): string[] {
        return ['Mon', 'Wed', 'Fri'];
    }

    private populateMonths(): string[] {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        const today = new Date();
        const currentMonthOrder = today.getUTCMonth();

        const monthsOrdered = new Array<string>(months.length);

        for (let i: number = 0; i < months.length; i++) {
            monthsOrdered[i] = months[(currentMonthOrder + i) % months.length];
        }

        return monthsOrdered;
    }

    private populateContributions(): [number, Int8Array] {
        let productivity = 0;

        const contributions = new Int8Array(371);

        for (let i = 0; i < contributions.length; ++i) {
            const isContribution = Math.round(Math.random());

            if (isContribution == 0) {
                contributions[i] = 0;
            }
            else {
                const contributionRate = Math.round(Math.random() * 39) + 1;

                contributions[i] = this.calculateContribution(contributionRate);

                ++productivity;
            }
        }

        return [productivity, contributions];
    }

    private calculateContribution(contributionRate: number): number {
        let contribution = 0;
        let currentRate = 0;

        for (let j = 1; j <= this._contributionsVariety; ++j) {
            currentRate += j * this._contributionsVariety;

            if (contributionRate <= currentRate) {
                contribution = this._contributionsVariety - j + 1;

                break;
            }
        }

        return contribution;
    }
}