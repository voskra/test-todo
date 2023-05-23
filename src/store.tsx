import { configureStore } from '@reduxjs/toolkit';
import { throttle } from 'lodash';
import { todosReducer } from './reducers/todos';
import { visibilityReducer } from './reducers/visibility';
import { loadState, saveState } from './localStorage';

const reducer = {
  todos: todosReducer,
  visibility: visibilityReducer
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: loadState()
});

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
