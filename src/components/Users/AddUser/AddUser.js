import React, { useState } from 'react';
import { Card } from '../../UI/Card/Card';
import { Button } from '../../UI/Button/Button';
import { ErrorModal } from '../../UI/ErrorModal/ErrorModal';

import style from './AddUser.module.css';

export const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (!enteredUsername.trim().length || !enteredAge.trim().length) return;
    if (parseInt(enteredAge) < 1) return;

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <>
      <ErrorModal title="An error occured!" message="Something went wrong!" />
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
