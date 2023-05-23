import * as React from 'react';
import { Typography } from '@mui/material';
import {
  ToDoList,
  ToDoNewItem,
  TodoFilter,
  TodoDeleteCompleted
} from '../components';
import css from '../App.module.css';

export const ToDo = React.memo(() => {
  return (
    <>
      <Typography align="center" component="h1" variant="h4">
        Hello User, here is your tasks
      </Typography>
      <div className={css.todoListButtonsContainer}>
        <ToDoNewItem />
        <TodoFilter />
        <TodoDeleteCompleted />
      </div>
      <ToDoList />
    </>
  );
});

ToDo.displayName = nameof(ToDo);
