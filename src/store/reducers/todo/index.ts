import { createSlice } from '@reduxjs/toolkit';
import { TodoItemType } from '../../../components/Template/Todo/types';

const slice = createSlice({
  name: 'auth',
  initialState: {
    data: [
      { id: 1, text: 'text 1' },
      { id: 2, text: 'text 2' },
    ],
  },
  reducers: {
    addItem: (state, { payload }: AddItemPayload) => {
      state.data.push(payload);
    },
  },
});

export type AddItemPayload = {
  payload: TodoItemType;
};

export const { addItem } = slice.actions;

export default slice.reducer;
