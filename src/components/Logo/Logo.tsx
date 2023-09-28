import { getMainPageRoute } from '@shared/constants';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

function Logo() {
  return (
    <div className={styles.logo}>
      <Link to={getMainPageRoute()}>
        ToDo<span className={styles.logo_accent}>.soft</span>
      </Link>
    </div>
  );
}

export default Logo;
