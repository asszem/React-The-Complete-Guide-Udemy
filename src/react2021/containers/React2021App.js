import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import UseStateSamples from '../components/UseStateSamples/UseStateSamples';
import BasicBurgerApp from '../../basicBurger/components/BasicBurgerApp';
import LegacyCodeSamples from '../../code samples/containers/CodeSamples';
import Section4Assignment2App from '../../assignments/NewContent/Section4-Assignment2/Section4Assignment2App';

function React2021App() {
    const [componentStates, setComponentState] = useState(
        {
            components: [
                {
                    id: 0,
                    componentName: 'UseStateSamples',
                    componentVisible: false,
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
                {
                    id: 3,
                    componentName: 'Section4Assignment2App',
                    componentVisible: true,
                    component: Section4Assignment2App,
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