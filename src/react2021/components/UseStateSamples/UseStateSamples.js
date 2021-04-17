import UseStateArray from './UseStateArray';
import UseStateCounter from './UseStateCounter';
import UseStateForm from './UseStateForm/PasswordForm';
import NewExpense from './UseStateForm/NewExpense';

function UseStateSamples() {
    return (<div>
        <h2>Use State Samples</h2>
        <UseStateCounter />
        <UseStateArray />
        <UseStateForm/>
        <NewExpense></NewExpense>
    </div>);
}

export default UseStateSamples;