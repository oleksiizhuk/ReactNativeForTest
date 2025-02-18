export type DestItemType = {
  id: string
  text: string
  type: string
  time: string
}

export interface BoardTemplateProps {
  waitingList: DestItemType[]
  inProgressList: DestItemType[]
  recommendationList: DestItemType[]
  doneList: DestItemType[]
}
