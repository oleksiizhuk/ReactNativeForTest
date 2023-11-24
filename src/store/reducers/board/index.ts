import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  boardList: [{ id: '1', text: 'English', type: 'waiting', time: '60' }],
}

const slice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addItem: () => {},
    delete: () => {},
    update: () => {},
    updateStatus: () => {},
  },
})

// export const { addItem, deleteTodoItemById } = slice.actions

export default slice.reducer
