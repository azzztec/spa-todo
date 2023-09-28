import { FirstJoinProvider } from '@components/providers/FirstJoinProvider/FirstJoinProvider';
import NotFound from '@containers/NotFound/NotFound';

function NotFoundPage() {
  return (
    <FirstJoinProvider>
      <NotFound />
    </FirstJoinProvider>
  );
}

export default NotFoundPage;
