import Header from '@components/layout/Header/Header';
import AppRouter from '@components/routing/AppRouter/AppRouter';
import styles from './app.module.scss';

function App(): JSX.Element {
  return (
    <div className={styles.app}>
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
