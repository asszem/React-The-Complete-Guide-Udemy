import classes from './ToolbarItem.module.css';

function ToolbarItem(props) {
    return (
        <li className={classes.ToolbarItem} onClick={props.toggleComponentState}>
            <a
                href={props.link}
                className={props.active ? classes.active : null}
            >
                {props.children}
            </a>
        </li>
    );
};
export default ToolbarItem;