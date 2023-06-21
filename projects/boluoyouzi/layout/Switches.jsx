import React from 'react';
import styles from './Switches.module.css';

const Switches = () => {
  return (
    <div>
      <div className={styles.back}></div>
      <div className={styles.main}>
        <label className={styles.switch}>
          <input type="radio" name="value-radio" />
          <div className={styles.button}>
            <div className={styles.light}></div>
            <div className={styles.dots}></div>
          </div>
        </label>
        <label className={styles.switch1}>
          <input type="radio" checked name="value-radio" />
          <div className={styles.button}>
            <div className={styles.light}></div>
            <div className={styles.dots}></div>
          </div>
        </label>
        <label className={styles.switch2}>
          <input type="radio" name="value-radio" />
          <div className={styles.button}>
            <div className={styles.light}></div>
            <div className={styles.dots}></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Switches;
