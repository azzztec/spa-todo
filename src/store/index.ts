import { applyMiddleware, createStore } from 'redux';
import localStorageMiddleware from './middlewares/localStorageMiddleware';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(localStorageMiddleware),
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
