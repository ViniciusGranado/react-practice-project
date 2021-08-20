import React from 'react';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';

import styles from './ErrorModal.module.css';

export const ErrorModal = (props) => {
  return (
    <>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>

        <div className={styles.content}>
          <p>{props.message}</p>
        </div>

        <footer className={styles.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </>
  );
};
