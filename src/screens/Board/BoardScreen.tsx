import React from 'react'
import { BoardTemplate } from '../../components/Template/Board/BoardTeamplate'
import { useBoardData } from './hook/useBoardData'

export const BoardScreen = () => {
  const boardData = useBoardData()
  return <BoardTemplate {...boardData} />
}
