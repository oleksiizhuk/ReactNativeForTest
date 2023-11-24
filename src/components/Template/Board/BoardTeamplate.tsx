import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { Desk } from '../../Organisms/Desk/Desk'
import { TaskItem } from '../../Molecules/TaskItem/TaskItem'
import { HorizontalList } from '../../Molecules/HorizontalList/HorizontalList'

export type DestItemType = {
  id: string
  text: string
  type: string
  time: string
}
interface BoardTemplateProps {
  waitingList: DestItemType[]
  inProgressList: DestItemType[]
  recommendationList: DestItemType[]
  doneList: DestItemType[]
}

export const BoardTemplate = memo<BoardTemplateProps>(
  ({ waitingList, inProgressList, recommendationList, doneList }) => {
    return (
      <View style={styles.container}>
        <View>
          <HorizontalList
            list={recommendationList}
            renderItem={({ item }) => <TaskItem {...item} />}
          />
        </View>
        <View style={styles.deskContainer}>
          <Desk title={'Waiting'} itemList={waitingList} />
          <Desk title={'In Progress'} itemList={inProgressList} />
          <Desk title={'Done'} itemList={doneList} />
        </View>
      </View>
    )
  },
)

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },
  deskContainer: {
    flexDirection: 'row',
    minHeight: '50%',
  },
})
