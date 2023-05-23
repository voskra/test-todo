import * as React from 'react';
import { Fab, Modal, Box, Button, TextField } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import type { TaskItemType } from '../interface';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addTodoItem } from '../reducers/todos';
import { todosSelector } from '../reducers/todosSelector';
import css from './ToDoList.module.css';

export const ToDoNewItem = React.memo(() => {
  const tasks = useAppSelector(todosSelector);
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState<boolean>(false);
  const [titleError, setTitleError] = React.useState<boolean>(false);
  const initialState = React.useMemo(() => {
    return { id: tasks.length, title: '', completed: false };
  }, [tasks.length]);

  const [task, setTask] = React.useState<TaskItemType>(initialState);

  const onOpenModal = React.useCallback(() => {
    setTask(initialState);
    setOpen(true);
  }, [initialState]);

  const onCloseModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  const onChangeInput = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.name === 'title') {
        setTitleError(false);
      }

      setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const onAddItem = React.useCallback(() => {
    if (!task.title.trim()) {
      setTitleError(true);
    } else {
      dispatch(addTodoItem(task));
      onCloseModal();
    }
  }, [dispatch, onCloseModal, task]);

  return (
    <>
      <Fab
        className={css.todoAddItemButton}
        color="primary"
        variant="extended"
        onClick={onOpenModal}
      >
        <AddIcon />
        Add new task
      </Fab>
      <Modal open={open} onClose={onCloseModal}>
        <Box className={css.todoAddItemModal}>
          <h2>Create a new task</h2>
          <TextField
            error={titleError}
            label="Task title"
            name="title"
            required={true}
            value={task.title}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
            label="Task description"
            multiline={true}
            name="description"
            rows={4}
            value={task.description || ''}
            onChange={onChangeInput}
          />
          <div className={css.todoModalButtonContainer}>
            <Button onClick={onCloseModal}>Cancel</Button>
            <Button variant="contained" onClick={onAddItem}>
              Add
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
});

ToDoNewItem.displayName = nameof(ToDoNewItem);
