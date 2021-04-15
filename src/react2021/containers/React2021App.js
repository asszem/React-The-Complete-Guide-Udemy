import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import UseStateSamples from '../components/UseStateSamples/UseStateSamples';
import BasicBurgerApp from '../../basicBurger/components/BasicBurgerApp';
import LegacyCodeSamples from '../../code samples/containers/CodeSamples';

function React2021App() {
    const [componentStates, setComponentState] = useState(
        {
            components: [
                {
                    id: 0,
                    componentName: 'UseStateSamples',
                    componentVisible: true,
                    component: UseStateSamples,
                },
                {
                    id: 1,
                    componentName: 'Legacy Burger Builder',
                    componentVisible: false,
                    component: BasicBurgerApp,
                },
                {
                    id: 2,
                    componentName: 'Legacy Code Samples',
                    componentVisible: false,
                    component: LegacyCodeSamples,
                },
            ]
        }
    )

    const toggleComponentState = (index) => {
        let newComponents = [...componentStates.components];
        newComponents[index].componentVisible = !componentStates.components[index].componentVisible;
        setComponentState(
            {
                components: newComponents
            }
        );
    }

    const displayComponents = (
        <div>
            {
                componentStates.components.map(
                    (currentComponent, index) => (
                        // if both true, it will be displayed. Second part is always true
                        (currentComponent.componentVisible && <currentComponent.component />)
                    )
                )
            }
        </div>
    );

    return (
        <Layout toggleComponentState={toggleComponentState} componentStates={componentStates}>
            {displayComponents}
        </Layout>
    )
};

export default React2021App;