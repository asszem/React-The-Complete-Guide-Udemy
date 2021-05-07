import React, { useState } from 'react';
import AddUser from '../components/AddUser';
import ListUsers from '../components/ListUsers';

const Section8OwnApp = () => {
    const [users, setUsers] = useState(
        [
            {
                name: 'Andras',
                age: 42,
                id: 1,
            }
        ]);

    const onNewUserSubmitted = (newUserData) => {
        let errorMsg = '';
        if (newUserData.name === '') {
            errorMsg = 'Empty name';
        }
        if (newUserData.age <= 0) {
            errorMsg = 'Invalid age';
        }
        if (errorMsg !== '') {
            alert(errorMsg);
        } else {
            const newId = getMaxId(users) + 1;
            setUsers(
                (prevUsers) => (
                    [
                        ...prevUsers,
                        {
                            name: newUserData.name,
                            age: newUserData.age,
                            id: newId,
                        }
                    ]
                )
            )

        }

    }

    function getMaxId(users) {
        return Math.max.apply(Math, users.map(function (o) { return o.id; }))
    }

    return (
        <div>
            <div>
                <AddUser onNewUserSubmitted={onNewUserSubmitted}></AddUser>
            </div>
            <div>
                <ListUsers users={users}></ListUsers></div>
        </div>
    );
}

export default Section8OwnApp;