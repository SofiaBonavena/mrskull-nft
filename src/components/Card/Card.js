import React from 'react';
import styles from './Card.module.css';

const Card = () => {
    return (
    <div className={`card ${styles['container']}`}>
      <div>
        <figure className={`${styles['figurecontainer']}`}>
        <div className={styles.img}></div>
        </figure>
      </div>
      <div>
        <figure className={`${styles['figurecontainer']}`}>
        <div className={styles.img}></div>
        </figure>
      </div>
      <div>
        <figure className={`${styles['figurecontainer']}`}>
        <div className={styles.img}></div>
        </figure>
      </div>
    </div>
  );
};

export default Card;