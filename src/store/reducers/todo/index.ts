import { createSlice } from '@reduxjs/toolkit'
import { TodoItemType } from '../../../components/Template/Todo/types'
import { TodoState } from './types'

export const initialState: TodoState = {
  data: [],
}

const slice = createSlice({
  name: 'auth',
  initialState: initialState,
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
