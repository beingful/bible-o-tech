import type { IObservableEntry } from "./iObservableEntry";

export interface IObservableRoot {
    get id(): string;
    get entries(): IObservableEntry[];

    watch(entryId: string): void;
}