import { Component, createSignal } from "solid-js";
import { createScope, Overridable } from "shopwer";

export const CounterValueScope = createScope(Symbol("CounterValue"));

const Counter: Component = (props) => {
    const [counter, setCounter] = createSignal(0);

    setInterval(() => {
        setCounter((counter) => counter + 1);
    }, 1000);

    return (
        <div>
            <h1>This is my awesome counter</h1>
            <Overridable scope={CounterValueScope}>{counter}</Overridable>
        </div>
    );
};

export default Counter;
