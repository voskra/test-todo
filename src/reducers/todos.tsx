import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { TaskItemType, TasksType } from '../interface';

const initialState: TasksType = [
  {
    id: 4,
    title: 'What is Lorem Ipsum?',
    completed: false,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
  ];

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodoItem(state: TasksType, action: PayloadAction<TaskItemType>) {
      state.unshift(action.payload);
    },
    completeTodoItem(state: TasksType, action: PayloadAction<number>) {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        const element = { ...state[index], completed: !state[index].completed };
        state.splice(index, 1);

        if (element.completed) {
          state.push(element);
        } else {
          state.unshift(element);
        }
      }
    },
    deleteTodoItem(state: TasksType, action: PayloadAction<number>) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    deleteCompletedTodoItems(state: TasksType) {
      return state.filter((todo) => !todo.completed);
    }
  }
});

export const { reducer: todosReducer } = todosSlice;
export const {
  addTodoItem,
  completeTodoItem,
  deleteTodoItem,
  deleteCompletedTodoItems
} = todosSlice.actions;
