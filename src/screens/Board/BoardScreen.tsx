import React from 'react'
import { BoardTemplate } from '@screens/Board/BoardTemplate/BoardTemplate'
import { useBoardData } from './hook/useBoardData'

export const BoardScreen = () => {
  const boardData = useBoardData()
  return <BoardTemplate {...boardData} />
}
