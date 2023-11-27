import { DestItemType } from '../../../components/Template/Board/BoardTeamplate'
import { useSelector } from 'react-redux'
import { selectRecommendation } from '../../../store/selector/board'

export const useBoardData = () => {
  const recommendationList = useSelector(selectRecommendation)

  console.log('recommendationList = ', recommendationList)

  const waitingList: DestItemType[] = [
    { id: '1', text: 'English', type: 'waiting', time: '' },
    { id: '2', text: 'Gym', type: 'waiting', time: '' },
  ]
  const inProgressList = [
    { id: '3', text: 'English', type: 'waiting', time: '' },
  ]

  // const recommendationList = [
  //   { id: '3', text: 'English', type: 'waiting', time: '' },
  // ]
  const doneList = [{ id: '3', text: 'English', type: 'waiting', time: '' }]

  return {
    waitingList,
    recommendationList,
    inProgressList,
    doneList,
  }
}
