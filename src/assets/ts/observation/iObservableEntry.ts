import type { ITransition } from "../iTransition";

export interface IObservableEntry {
    get id(): string;
    get active(): boolean;
    get transition(): ITransition;
}