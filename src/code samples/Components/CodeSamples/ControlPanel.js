import React from 'react';

const ControlPanel = (props) => {
  return (
    <div>
      <button onClick={() => props.onClick(0,'showGuide')}>React guide</button>
      <button onClick={() => props.onClick(1,'showPhoneApp')}>Phones App</button>
      <button onClick={() => props.onClick(2,'showLifecycle')}>LifeCycles</button>
    </div>
  );
};

export default ControlPanel;
