import * as React from 'react';
import { Grid } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../hooks';
import { completeTodoItem, deleteTodoItem } from '../reducers/todos';
import { todosSelector } from '../reducers/todosSelector';
import { ToDoItem } from './ToDoItem';
import css from './ToDoList.module.css';

export const ToDoList = React.memo(() => {
  const tasks = useAppSelector(todosSelector);
  const dispatch = useAppDispatch();

  const onTaskComplete = React.useCallback(
    (id: number) => dispatch(completeTodoItem(id)),
    [dispatch]
  );

  const onTaskDelete = React.useCallback(
    (id: number) => dispatch(deleteTodoItem(id)),
    [dispatch]
  );

  return (
    <Grid className={css.todoListContainer} direction="column" wrap="nowrap">
      {tasks.map((task, index) => (
        <ToDoItem
          key={`index_${index}_id_${task.id}`}
          task={task}
          onTaskComplete={onTaskComplete}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </Grid>
  );
});

ToDoList.displayName = nameof(ToDoList);
