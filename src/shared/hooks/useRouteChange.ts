import { AppPages, AppRouteByPathPattern } from '@shared/constants';
import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

const useRouteChange = () => {
  const location = useLocation();
  const [appRoute, setAppRoute] = useState<AppPages>(AppPages.MAIN);

  useEffect(() => {
    Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
      if (matchPath(pattern, location.pathname) != null) {
        setAppRoute(route);
      }
    });
  }, [location.pathname]);

  return appRoute;
};

export default useRouteChange;
