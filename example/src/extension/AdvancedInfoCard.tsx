import { Component, createSignal } from "solid-js";
import { InfoCardScope } from "./InfoCard";
import { useExtendable } from "shopwer";

const AdvancedInfoCard: Component = () => {
    const [randDate, setRandDate] = createSignal(new Date());

    setInterval(() => {
        setRandDate(new Date(Math.random() * 1_000_000_000_000));
    }, 250);

    return useExtendable(InfoCardScope).extend((current) => (
        <>
            {current}
            <p>
                *new* <span style="font-weight: bold">Birthday:</span>
                {randDate().toUTCString()}
            </p>
        </>
    ));
};

export default AdvancedInfoCard;
