import React, {Component} from 'react';

import './BasicBurgerApp.css'
import Layout from '../components/Layout/Layout';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder';

class BasicBurgerApp extends Component {
    render () {
        return (
            <div id="BasicBurgerBuilder">
                <Layout>
                    <BurgerBuilder></BurgerBuilder>
                </Layout>
            </div>
        );

    }
}

export default BasicBurgerApp;