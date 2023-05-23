import type { PreloadStateType } from './interface';

export const loadState = (): PreloadStateType | undefined => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return void 0;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Something wrong with parse state from localStorage!');

    return void 0;
  }
};

export const saveState = (state: unknown): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    console.error('Something wrong with stringify state!');
  }
};
