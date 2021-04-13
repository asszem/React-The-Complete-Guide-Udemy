import React from 'react';

import Aux from '../../hoc/Auxillary';
import Toolbar from '../../components/Toolbar/Toolbar';
import classes from './Layout.module.css';

const layout = (props) => (
  <Aux>
    <Toolbar></Toolbar>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
