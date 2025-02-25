import { createSlice } from '@reduxjs/toolkit'
import { ThemePayload } from './types'

const slice = createSlice({
  name: 'theme',
  initialState: { theme: 'default', darkMode: false },
  reducers: {
    changeTheme: (state, { payload: { theme, darkMode } }: ThemePayload) => {
      if (typeof theme !== 'undefined') {
        state.theme = theme
      }
      if (typeof darkMode !== 'undefined') {
        state.darkMode = darkMode
      }
    },
    setDefaultTheme: (
      state,
      { payload: { theme, darkMode } }: ThemePayload,
    ) => {
      if (!state.theme) {
        if (typeof theme !== 'undefined') {
          state.theme = theme
        }
        if (typeof darkMode !== 'undefined') {
          state.darkMode = darkMode
        }
      }
    },
  },
})

export const { changeTheme, setDefaultTheme } = slice.actions
export default slice.reducer
