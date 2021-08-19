import React from 'react';

export const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor='username'>Username</label>
      <input id='username' type='text' />

      <label htmlFor='username'>Age (Years)</label>
      <input id='username' type='number' />

      <button type='submit'>Add User</button>
    </form>
  );
}