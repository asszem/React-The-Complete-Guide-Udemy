import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import UseStateSamples from '../components/UseStateSamples/UseStateSamples';
import UseEffectSamples from '../components/UseEffectSamples/UseEffectWithFetch';
import BasicBurgerApp from '../../basicBurger/components/BasicBurgerApp';
import LegacyCodeSamples from '../../code samples/containers/CodeSamples';
import Section4Assignment2App from '../../assignments/NewContent/Section4-Assignment2/Section4Assignment2App';
import Section8OwnApp from '../../assignments/NewContent/Section8/Own/containers/Section8OwnApp';


function React2021App() {
    const [componentStates, setComponentState] = useState(
        {
            components: [
                {
                    componentName: 'UseStateSamples',
                    componentVisible: false,
                    component: UseStateSamples,
                },
                {
                    componentName: 'Legacy Burger Builder',
                    componentVisible: false,
                    component: BasicBurgerApp,
                },
                {
                    componentName: 'Legacy Code Samples',
                    componentVisible: false,
                    component: LegacyCodeSamples,
                },
                {
                    componentName: 'Section4Assignment2App',
                    componentVisible: false,
                    component: Section4Assignment2App,
                },
                {
                    componentName: 'Section8Own',
                    componentVisible: false,
                    component: Section8OwnApp,
                },
                {
                    componentName: 'Section8Maxi',
                    componentVisible: false,
                    component: Section4Assignment2App,
                },
                {
                    componentName: 'UseEffect samples',
                    componentVisible: true,
                    component: UseEffectSamples,
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
                        (currentComponent.componentVisible && <currentComponent.component key={index}/>)
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