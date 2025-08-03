import type { IObservableRoot } from "./iObservableRoot";

export class ElementObserver {
    private readonly _observable: IObservableRoot;
    private readonly _intersectionObserver: IntersectionObserver;

    constructor(observable: IObservableRoot, options: IntersectionObserverInit) {
        this._observable = observable;
        this._intersectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index: number = parseInt(entry.target.id);

                    observable.watch(index.toString());
                }
            });
        }, options);
    }

    public startObserving(container: Element): void {
        this._observable.entries.forEach(entry => {
            const elementToObserve: Element = container.children.namedItem(entry.id)!;

            this._intersectionObserver.observe(elementToObserve);
        });
    }

    public stopObserving(): void {
        this._intersectionObserver.disconnect();
    }
}