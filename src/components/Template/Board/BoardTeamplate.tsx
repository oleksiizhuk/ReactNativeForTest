import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { Desk } from '../../Organisms/Desk/Desk'
import { TaskItem } from '../../Molecules/TaskItem/TaskItem'
import { HorizontalList } from '../../Molecules/HorizontalList/HorizontalList'

export const BoardTemplate = memo(() => {
  const waitingList = [
    { id: 1, text: 'English' },
    { id: 2, text: 'English' },
  ]
  const inProgressList = [{ id: 3, text: 'English' }]

  return (
    <View style={styles.container}>
      <View>
        <HorizontalList
          list={waitingList}
          renderItem={({ item }) => <TaskItem {...item} />}
        />
      </View>
      <View style={styles.deskContainer}>
        <Desk title={'Waiting'} itemList={waitingList} />
        <Desk title={'In Progress'} itemList={inProgressList} />
        <Desk title={'Done'} />
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },
  deskContainer: {
    flexDirection: 'row',
    minHeight: '50%',
  },
})
