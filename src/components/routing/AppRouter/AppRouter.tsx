import { Route, RouteProps, Routes } from 'react-router-dom';
import {
  AppPages,
  getMainPageRoute,
  getProjectsPageRoute,
  getTasksPageRoute,
} from '@shared/constants';
import MainPage from '@pages/Main/MainPage';
import ProjectsPage from '@pages/Projects/ProjectsPage';
import NotFoundPage from '@pages/NotFound/NotFound';
import TasksPage from '@pages/Tasks/TasksPage';

export const routeConfig: Record<AppPages, RouteProps> = {
  [AppPages.MAIN]: {
    path: getMainPageRoute(),
    element: <MainPage />,
  },
  [AppPages.PROJECTS]: {
    path: getProjectsPageRoute(),
    element: <ProjectsPage />,
  },
  [AppPages.TASKS]: {
    path: getTasksPageRoute(':id'),
    element: <TasksPage />,
  },
  [AppPages.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};

function AppRouter(): JSX.Element {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default AppRouter;
