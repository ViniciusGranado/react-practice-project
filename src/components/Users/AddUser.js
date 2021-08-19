import React from 'react';
import { Card } from '../UI/Card/Card';

import style from './AddUser.module.css';

export const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={style.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />

        <label htmlFor="username">Age (Years)</label>
        <input id="username" type="number" />

        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};
