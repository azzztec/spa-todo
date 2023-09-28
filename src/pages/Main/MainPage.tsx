import { FirstJoinProvider } from '@components/providers/FirstJoinProvider/FirstJoinProvider';
import Main from '@containers/Main/Main';

function MainPage() {
  return (
    <FirstJoinProvider>
      <Main />
    </FirstJoinProvider>
  );
}

export default MainPage;
