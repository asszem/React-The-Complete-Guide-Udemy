import User from './User';

const ListUsers = (props) => (
    <div>
        List Users
        {props.users.map((user) => (
            <User name={user.name} age={user.age} key={user.id}></User>
        ))
        }
    </div>
);

export default ListUsers;