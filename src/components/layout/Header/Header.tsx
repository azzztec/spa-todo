import {
  AppPages,
  getProjectsPageRoute,
} from '@shared/constants';
import { Link } from 'react-router-dom';
import { ProjectIcon } from '@components/shared/icons';
import classNames from 'classnames';
import useRouteChange from '@shared/hooks/useRouteChange';
import Logo from '@components/Logo/Logo';
import styles from './index.module.scss';

function Header() {
  const route = useRouteChange();

  return (
    <header className={styles.nav}>
      <Logo />
      <nav>
        <ul className={styles.nav_links_list}>
          <li>
            <Link
              className={classNames(styles.nav_link, {
                [styles.active]: route === AppPages.PROJECTS,
              })}
              to={getProjectsPageRoute()}
            >
              {ProjectIcon}Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
