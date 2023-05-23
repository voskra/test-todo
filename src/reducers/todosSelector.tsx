import { createDraftSafeSelector } from '@reduxjs/toolkit';
import type { StateType } from '../store';

const getVisibilityFilter = (state: StateType) => state.visibility;
const getTodos = (state: StateType) => state.todos;

export const todosSelector = createDraftSafeSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter((todo) => todo.completed);
      case 'SHOW_ACTIVE':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }
);
