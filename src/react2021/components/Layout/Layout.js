import classes from './Layout.module.css';
import Aux from '../../hoc/Auxillary/Auxillary';
import Toolbar from '../Toolbar/Toolbar.js';

function Layout(props) {
    return (
        <Aux>
            <Toolbar toggleComponentState={props.toggleComponentState} componentStates={props.componentStates}></Toolbar>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;