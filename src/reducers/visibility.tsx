import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { VisibilityType } from '../interface';

const visibilitySlice = createSlice({
  name: 'visibility',
  initialState: 'SHOW_ALL' as VisibilityType,
  reducers: {
    changeVisibilityFilter(
      _state: VisibilityType,
      action: PayloadAction<VisibilityType>
    ) {
      return action.payload;
    }
  }
});

export const { reducer: visibilityReducer } = visibilitySlice;
export const { changeVisibilityFilter } = visibilitySlice.actions;
