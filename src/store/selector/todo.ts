import { createSelector } from 'reselect'
import { AppState } from '../types'

const selectTodo = (state: AppState) => state.todo

export const selectTodoData = createSelector(selectTodo, ({ data }) => data)
