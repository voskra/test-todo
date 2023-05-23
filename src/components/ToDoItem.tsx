import * as React from 'react';
import { Grid, Checkbox, Paper, Typography, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import cn from 'classnames';
import type { TaskItemType } from '../interface';
import css from './ToDoList.module.css';

interface ToDoItemOwnProps {
  task: TaskItemType;
  onTaskComplete: (id: number) => void;
  onTaskDelete: (id: number) => void;
}

export const ToDoItem = React.memo<ToDoItemOwnProps>(
  ({ task, onTaskComplete, onTaskDelete }) => {
    const handleRadioClick = React.useCallback(() => {
      onTaskComplete(task.id);
    }, [onTaskComplete, task.id]);

    const handleDeleteClick = React.useCallback(() => {
      onTaskDelete(task.id);
    }, [onTaskDelete, task.id]);

    return (
      <Paper className={css.todoItem} elevation={4}>
        <Grid container={true} direction="column" item={true}>
          <Grid container={true} item={true}>
            <Grid item={true}>
              <Checkbox checked={task.completed} onChange={handleRadioClick} />
            </Grid>
            <Grid
              className={cn(
                css.todoTitleContainer,
                task.completed && css.todoCompletedTitle
              )}
              item={true}
              xs="auto"
            >
              <Typography component="div" variant="h6">
                {task.title}
              </Typography>
            </Grid>
            <Grid item={true}>
              <IconButton onClick={handleDeleteClick}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
          {task.description && !task.completed && (
            <Grid item={true}>
              <Typography gutterBottom={true} variant="body2">
                {task.description}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Paper>
    );
  }
);

ToDoItem.displayName = nameof(ToDoItem);
