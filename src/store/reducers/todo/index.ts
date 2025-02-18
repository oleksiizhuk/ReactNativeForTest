import { createSlice } from '@reduxjs/toolkit'
import { TodoState } from './types'

export const initialState: TodoState = {
  data: [],
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.data.push(payload)
    },
    deleteTodoItemById: (state, { payload: id }) => {
      state.data = state.data.filter((item) => item.id !== id)
    },
  },
})

export const { addItem, deleteTodoItemById } = slice.actions

export default slice.reducer
