import { createSelector } from 'reselect'
import { AppState } from '@store/types.ts'

const selectTodo = (state: AppState) => state.todo

export const selectTodoData = createSelector(selectTodo, ({ data }) => data)
