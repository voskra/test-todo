import * as React from 'react';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeVisibilityFilter } from '../reducers/visibility';
import type { VisibilityType } from '../interface';

export const TodoFilter = React.memo(() => {
  const visibility = useAppSelector((state) => state.visibility);
  const dispatch = useAppDispatch();
  const onChangeFilter = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = (event.target as HTMLInputElement)
        .value as VisibilityType;

      dispatch(changeVisibilityFilter(newValue));
    },
    [dispatch]
  );

  return (
    <FormControl>
      <RadioGroup row={true} value={visibility} onChange={onChangeFilter}>
        <FormControlLabel control={<Radio />} label="All" value="SHOW_ALL" />
        <FormControlLabel
          control={<Radio />}
          label="Active"
          value="SHOW_ACTIVE"
        />
        <FormControlLabel
          control={<Radio />}
          label="Completed"
          value="SHOW_COMPLETED"
        />
      </RadioGroup>
    </FormControl>
  );
});

TodoFilter.displayName = nameof(TodoFilter);
