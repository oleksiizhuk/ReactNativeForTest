import React from 'react'
import { BoardTemplate } from '../../components/Template/Board/BoardTemplate'
import { useBoardData } from './hook/useBoardData'

export const BoardScreen = () => {
  const boardData = useBoardData()
  return <BoardTemplate {...boardData} />
}
