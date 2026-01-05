import { createSelector } from 'reselect'
import { AppState } from '../types'

const selectBoard = (state: AppState) => state.board

export const select = createSelector(selectBoard, ({ data }) => data)
export const selectRecommendation = createSelector(selectBoard, (data) => data)
