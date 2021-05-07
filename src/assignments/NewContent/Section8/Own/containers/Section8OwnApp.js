import React, { useState } from 'react';
import AddUser from '../components/AddUser';
import ListUsers from '../components/ListUsers';
import Modal from '../components/Modal';

const Section8OwnApp = () => {
  const [users, setUsers] = useState([
    {
      name: 'Andras',
      age: 42,
      id: 1,
    },
  ]);

  const [modal, setModal] = useState({
    visible: false,
    message: '',
  });

  const onNewUserSubmitted = (newUserData) => {
    let errorMsg = '';
    if (newUserData.name === '') {
      setModal({
        visible: true,
        message: 'Empty name',
      });
    } else if (newUserData.age <= 0) {
      setModal({
        visible: true,
        message: 'Invalid age',
      });
    } else {
      const newId = getMaxId(users) + 1;
      setUsers((prevUsers) => [
        ...prevUsers,
        {
          name: newUserData.name,
          age: newUserData.age,
          id: newId,
        },
      ]);
    }
  };

  const closeModalHandler = () => {
    setModal({ visible: false, message: 'Modal is closed' });
  };

  function getMaxId(users) {
    return Math.max.apply(
      Math,
      users.map(function (o) {
        return o.id;
      })
    );
  }

  return (
    <div>
      <Modal
        closeModalHandler={closeModalHandler}
        message={modal.message}
        visible={modal.visible}
      ></Modal>
      <div>
        <AddUser onNewUserSubmitted={onNewUserSubmitted}></AddUser>
      </div>
      <div>
        <ListUsers users={users}></ListUsers>
      </div>
    </div>
  );
};

export default Section8OwnApp;
