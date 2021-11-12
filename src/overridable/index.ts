import { Accessor, createSignal, JSX, Setter } from 'solid-js';
import { ElementScope } from '../scopes';
export { Overridable } from './component';

const registeredOverridables: OverridableElement[] = [];

export default class OverridableElement {
    public element: Accessor<JSX.Element>;
    public setElement: Setter<JSX.Element>;

    constructor(private scope: ElementScope, initial: JSX.Element) {
        [this.element, this.setElement] = createSignal(initial);
    }

    public match(other: ElementScope): boolean {
        return this.scope.id === other.id;
    }
}

export function createOverride(
    scope: ElementScope,
    initialElement: JSX.Element,
): OverridableElement {
    const overridable = new OverridableElement(scope, initialElement);

    registeredOverridables.push(overridable);

    return overridable;
}

export function useOverridable(scope: ElementScope): OverridableElement {
    const override = registeredOverridables.find((over) => over.match(scope));

    if (!override) {
        throw new Error(`Override not found. Scope: ${String(scope.id)}`);
    }

    return override;
}
