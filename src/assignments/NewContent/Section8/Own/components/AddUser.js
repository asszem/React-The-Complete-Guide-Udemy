import React, { useState } from 'react';

const AddUser = (props) => {
    const [enteredName, setName] = useState('')
    const [enteredAge, setAge] = useState('')

    const submitHandler = (event) => {
        // to prevent page reload when the form is submitted
        event.preventDefault();
        // send the submitted data to parent component
        const newUserData = {
            name: enteredName,
            age: enteredAge,
        }

        props.onNewUserSubmitted(newUserData);
    }

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Name</label>
            <input
                type='text'
                value={enteredName}
                onChange={nameChangeHandler} />
            <label>Age</label>
            <input
                type='number'
                value={enteredAge}
                onChange={ageChangeHandler} />
            <button type='submit'>Add User</button>
        </form>
    );
};

export default AddUser;