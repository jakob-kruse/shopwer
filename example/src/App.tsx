import { Component } from 'solid-js';
import Counter from './override/Counter';
import InfoCard from './extension/InfoCard';
import AdvancedInfoCard from './extension/AdvancedInfoCard';

const App: Component = () => {
    return (
        <>
            <div>
                <h1>Overridable Example - Counter</h1>
                <Counter></Counter>
            </div>
            <div>
                <h1>Base Info Card</h1>
                <InfoCard></InfoCard>
                <h2>Extended Info Card</h2>
                <AdvancedInfoCard></AdvancedInfoCard>
            </div>
        </>
    );
};

export default App;
