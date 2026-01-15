import { createSelector } from 'reselect'
import { AppState } from '@store/types.ts'

const selectBoard = (state: AppState) => state.board

export const select = createSelector(selectBoard, ({ data }) => data)
export const selectRecommendation = createSelector(selectBoard, (data) => data)
