import { createScope } from "shopwer";
import { Component, createSignal } from "solid-js";
import { Extendable } from "shopwer";

export const InfoCardScope = createScope(Symbol("InfoCard"));

const InfoCard: Component = (props) => {
    const [age, setAge] = createSignal(12);
    setInterval(() => {
        setAge((a) => a + 1);
    }, 500);
    return (
        <Extendable scope={InfoCardScope}>
            <div>
                <p>
                    <span style="font-weight: bold">Name:</span>
                    Foo Bar Jr.
                </p>
                <p>
                    <span style="font-weight: bold">Age:</span>
                    {age}
                </p>
            </div>
        </Extendable>
    );
};

export default InfoCard;
