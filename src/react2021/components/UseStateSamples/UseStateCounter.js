import React, { useState } from 'react';

function UseStateCounter() {

    const [counterButtonState, setCounterButtonState] = useState(0);
    const [objectButtonState, setObjectButtonState]= useState({
        buttonText:'Not pressed',
        counter:0,
    })

    const numberButtonHandler = () => {
        setCounterButtonState(previousState => previousState + 1);
    }

    const objectButtonHandler = () => {
        setObjectButtonState(
            {...objectButtonState,
            buttonText: 'Button pressed: ' + ++objectButtonState.counter,
            counter: objectButtonState.counter}

        );
    }

    return (<div>
        <h3>Use State Samples</h3>
        <button onClick={numberButtonHandler}>Pressed {counterButtonState} times</button>
        <button onClick={ () => setCounterButtonState(prevState => prevState + 1)}>Pressed {counterButtonState} times</button>
        <button onClick={objectButtonHandler}>{objectButtonState.buttonText}</button>
    </div>);
}

export default UseStateCounter