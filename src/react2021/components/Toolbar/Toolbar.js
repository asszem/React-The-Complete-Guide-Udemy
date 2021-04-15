import classes from './Toolbar.module.css';
import ToolbarItems from '../Toolbar/ToolbarItems/ToolbarItems';

function Toolbar(props) {
    return (
    <header className={classes.Toolbar}>
        {/* <div>MENU</div> */}
        <nav>
            <ToolbarItems toggleComponentState={props.toggleComponentState} componentStates={props.componentStates}/>
        </nav>
    </header>
    );
}

export default Toolbar;