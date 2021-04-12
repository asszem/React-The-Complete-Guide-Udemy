import React from 'react';
import Aux from '../hoc/Auxillary';
import Layout from '../Components/Layout/Layout';
import CodeSamples from '../containers/CodeSamples';

const codeSamplesApp = (props) => (
    <Aux>
        <Layout>
            <CodeSamples></CodeSamples>
        </Layout>
    </Aux>    


);

export default codeSamplesApp;