import React from 'react';
import styles from './index.module.scss';

const NotFound = () => {
  return (
    <section className={styles.layout}>
      <h1 className={styles.title}>Not Found :(</h1>
    </section>
  );
};

export default React.memo(NotFound);
