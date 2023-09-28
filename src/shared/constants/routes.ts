export enum AppPages {
  MAIN,
  PROJECTS,
  TASKS,
  NOT_FOUND,
}

export const getMainPageRoute = () => '/';
export const getProjectsPageRoute = () => '/projects';
export const getTasksPageRoute = (id: string) => `/project/${id}`;

export const AppRouteByPathPattern: Record<string, AppPages> = {
  [getMainPageRoute()]: AppPages.MAIN,
  [getProjectsPageRoute()]: AppPages.PROJECTS,
  [getTasksPageRoute(':id')]: AppPages.TASKS,
};
