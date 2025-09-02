export class TimeSlot {
    public readonly startDate: Date;
    public readonly endDate: Date | null;

    private readonly _monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    private readonly _now = "now";

    constructor(startDate: Date, endDate: Date | null) {
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public toString(): string {
        const from = this.dateToString(this.startDate);
        const to = this.endDate == null
            ? this._now
            : this.dateToString(this.endDate);

        return `${from} - ${to}`;
    }

    public dateToString(date: Date): string {
        const dateYear = date.getFullYear();
        const dateMonthId: number = date.getMonth();

        const dateMonthName = this._monthNames[dateMonthId];

        return `${dateMonthName} ${dateYear}`;
    }
}