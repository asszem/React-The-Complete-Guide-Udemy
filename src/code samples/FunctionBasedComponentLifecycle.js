import React, { useEffect } from 'react';
const FunctionBasedComponentLifecycle = (props) => {
  useEffect(() => {
    console.log('useEffect1 - no second parameter');
  });

  useEffect(() => {
    console.log('useEffect2 - toggleState changed');
  }, [props.toggleState]);

  useEffect(() => {
    console.log('useEffect3 - message changed');
  }, [props.state.message, props.blöblö]);

  useEffect(() => {
    console.log('useEffect4 - should run only once');
  }, []);

  return (
    <div>
      <p>Toggle state = {props.toggleState.toString()}</p>
      <button onClick={props.onClick}>Toggle state</button>
      <button onClick={props.onClick2}>Toggle message</button>
    </div>
  );
};

export default FunctionBasedComponentLifecycle;
