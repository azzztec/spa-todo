import { useFirstJoinContext } from '@components/providers/FirstJoinProvider/FirstJoinProvider';
import Button from '@components/shared/Button/Button';
import TextWriter from '@components/shared/TextWritter/TextWriter';
import { getProjectsPageRoute } from '@shared/constants';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styles from './index.module.scss';

function Main() {
  const { isFirstJoin, setFirstJoin } = useFirstJoinContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isFirstJoin && isFirstJoin !== null) {
      navigate(getProjectsPageRoute());
    }
  }, [isFirstJoin]);

  return (
    <section className={styles.layout}>
      <div className={styles.wrapper}>
        <TextWriter
          text="Centralize your product lifecycle"
          delay={75}
          renderContainer={(text) => <h1 className={styles.title}>{text}</h1>}
        />
        <Button
          onClick={() => {
            navigate(getProjectsPageRoute());
            setFirstJoin(false);
          }}
          size="large"
        >
          create project
        </Button>
      </div>
    </section>
  );
}

export default React.memo(Main);
