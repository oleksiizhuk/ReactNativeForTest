import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  recommendationList: [
    { id: '1', text: 'English', type: 'waiting', time: '60' },
    { id: '2', text: 'Walking', type: 'waiting', time: '60' },
    { id: '2', text: 'Reading', type: 'waiting', time: '60' },
    { id: '2', text: 'Planing', type: 'waiting', time: '30' },
  ],
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


export default slice.reducer
