import React, { Component } from 'react';
import FunctionBasedComponentLifecycle from './FunctionBasedComponentLifecycle';

//Component Lifecycle - Creation
// constructor(props)
// getDerivedStateFromProps(props, state)
// render()
// -- render Child components
// componentDidMount()

//Compontent Lifecycle - Update
// getDerivedStateFromProps(props, state)
// shouldComponentUpdate(nextProps, nextState) - must return true else it will cancel updating process
//render()
// -- Update Child Component props
// getSnapshotBeforeUpdate(prevProps, prevState) - should return a snapshot object
// componentDidUpdate(prevProps, prevState, snapshot)

class ClassBasedComponentLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleState: true,
      message: 'Hello',
    };
    console.log('Inside constructor()');
  }
  // Lifecycle hooks

  //DO: sync state
  //DON'T: cause side effects
  // this needs to be static, see Component Lifecycle
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props);
    return state;
  }


  //Must return something, or it wont allow the update
  //True is default if this method is not called
  shouldComponentUpdate(nextProps, nextState) {
    console.log('should component update nextProps =', nextProps);
    console.log('should component update nextState =', nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // use it for example to keep scroll position
    console.log('getSnapshotBeforeUpdate');
    console.log('prevState = ', prevState);
    console.log('prevProps = ', prevProps);
    return { message: 'This is snapshot message.' };
  }
  //getSnapshotBeforeUpdate must return something in order to use 3rd argument
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate, snapshot = ', snapshot.message);
  }
  
  //DO: cause side effects, like HTTP calls
  //DON'T: Update state, it triggers re-render
  // This is called after render()
  componentDidMount() {
    console.log(' componentDidMount');
  }

  stateButtonHandler = () =>{
    this.setState({
      toggleState:!this.state.toggleState,
    })
  }
  messageTextHandler = () =>
  {
    this.setState({
      message: 'Now ' + new Date().getSeconds(),
    })
  }

  render() {
    console.log('Inside render()');
    return (
      <div>
        <h1>{this.state.message}</h1>
        <FunctionBasedComponentLifecycle
        state={this.state}
        toggleState={this.state.toggleState}
        onClick={this.stateButtonHandler}
        onClick2={this.messageTextHandler}/>
      </div>
    );
  }
}

export default ClassBasedComponentLifecycle;
