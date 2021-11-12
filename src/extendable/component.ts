import { Component, createEffect } from "solid-js";
import { createExtendable } from ".";
import { ElementScope } from "..";

export const Extendable: Component<{ scope: ElementScope }> = (props) => {
    const extendable = createExtendable(props.scope, props.children);

    createEffect(() => {
        extendable._updateChildren(props.children);
    });

    return props.children;
};
