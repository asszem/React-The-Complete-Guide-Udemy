import React from 'react';

import classes from './Toolbar.module.css';

const toolbar = (props) =>(
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <div>Something</div>
        <nav>
            <ul>
                <li>App1</li>
                <li>App2</li>
            </ul>
        </nav>
    </header>
);

export default toolbar;