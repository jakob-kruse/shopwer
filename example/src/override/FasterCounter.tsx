import { useOverridable } from "shopwer";
import { createSignal } from "solid-js";
import { CounterValueScope } from "./Counter";

export function overrideCounter() {
    // Replace the slow counter with this speedy one
    const counterValue = useOverridable(CounterValueScope);

    const [fasterCounter, setFasterCounter] = createSignal(0);

    setInterval(() => {
        setFasterCounter((v) => v + 1);
    }, 250);

    const newCounter = <p>{fasterCounter} every 250ms</p>;

    useOverridable(CounterValueScope).setElement(newCounter);
}
