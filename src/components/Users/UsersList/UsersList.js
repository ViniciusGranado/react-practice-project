import React from 'react';
import { Card } from '../../UI/Card/Card';

import style from './UsersList.module.css';

export const UsersList = (props) => {
  return (
    <Card className={style.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
