import { ElementScope } from "..";
import { JSX } from "solid-js/jsx-runtime";
import type { Accessor, Setter } from "solid-js";
import { createSignal } from "solid-js";
export { Extendable } from "./component";

const registeredExtendables: ExtendableElement[] = [];

export class ExtendableElement {
    public element: Accessor<JSX.Element>;
    public _updateChildren: Setter<JSX.Element>;

    constructor(private scope: ElementScope, base: JSX.Element) {
        [this.element, this._updateChildren] = createSignal(base);
    }

    public extend(setter: (current: JSX.Element) => JSX.Element) {
        const [extended] = createSignal(setter(this.element));

        return extended;
    }

    public match(other: ElementScope): boolean {
        return this.scope.id === other.id;
    }
}

export function createExtendable(scope: ElementScope, base: JSX.Element) {
    const extendable = new ExtendableElement(scope, base);

    registeredExtendables.push(extendable);

    return extendable;
}

export function useExtendable(scope: ElementScope) {
    const extendable = registeredExtendables.find((ext) => ext.match(scope));

    if (!extendable) {
        throw new Error(`Extendable not found. Scope: ${String(scope.id)}`);
    }

    return extendable;
}
