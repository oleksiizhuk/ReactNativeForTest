import { createSlice } from '@reduxjs/toolkit'
import { TodoItemType } from '../../../components/Template/Todo/types'

const slice = createSlice({
  name: 'auth',
  initialState: {
    data: [
      { id: 1, text: 'text 1' },
      { id: 2, text: 'text 2' },
    ],
  },
  reducers: {
    addItem: (state, { payload }) => {
      state.data.push(payload)
    },
    deleteTodoItemById: (state, { payload: id }) => {
      state.data = state.data.filter((item) => item.id !== id)
    },
  },
})

export type AddItemPayload = {
  payload: TodoItemType
}

export const { addItem, deleteTodoItemById } = slice.actions

export default slice.reducer
