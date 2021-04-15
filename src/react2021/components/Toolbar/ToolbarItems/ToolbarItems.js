import classes from './ToolbarItems.module.css';
import ToolbarItem from './ToolbarItem/ToolbarItem';

function ToolbarItems(props) {
    return (
        <ul className={classes.ToolbarItems}>
            {
                props.componentStates.components.map(
                    (component, index) => (
                        <ToolbarItem
                            key={index}
                            toggleComponentState={() => props.toggleComponentState(index)}
                            active={component.componentVisible}
                        >{component.componentName}
                        </ToolbarItem>
                    )
                )
            }
        </ul>
    );
}

export default ToolbarItems;