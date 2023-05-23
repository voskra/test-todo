import * as React from 'react';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks';
import { todosSelector } from '../reducers/todosSelector';
import { deleteCompletedTodoItems } from '../reducers/todos';
import css from './ToDoList.module.css';

export const TodoDeleteCompleted = React.memo(
  () => {
    const tasks = useAppSelector(todosSelector);
    const dispatch = useAppDispatch();

    const disabled = React.useMemo(() => {
      return tasks.every((task) => !task.completed);
    }, [tasks]);

    const onDeleteCompleted = React.useCallback(() => {
      dispatch(deleteCompletedTodoItems());
    }, [dispatch]);

    return (
      <Button
        className={css.todoAddItemButton}
        disabled={disabled}
        startIcon={<DeleteIcon />}
        variant="outlined"
        onClick={onDeleteCompleted}
      >
        Delete all completed tasks
      </Button>
    );
  }
);

TodoDeleteCompleted.displayName = nameof(TodoDeleteCompleted);
