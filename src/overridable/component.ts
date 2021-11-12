import { Component } from 'solid-js';
import { createOverride, ElementScope } from '..';

export const Overridable: Component<{ scope: ElementScope }> = (props) => {
    const overridable = createOverride(props.scope, props.children);

    return overridable.element;
};
