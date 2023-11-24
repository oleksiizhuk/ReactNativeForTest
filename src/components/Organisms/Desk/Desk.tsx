import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TaskItem } from '../../Molecules/TaskItem/TaskItem'

interface DeskProps {
  title: string
  itemList?: any[]
}
export const Desk = memo<DeskProps>(({ title, itemList = [] }) => {
  return (
    <View style={styles.desk}>
      <Text style={styles.desk_title}>{title}</Text>
      <View>
        {itemList.map(({ text, id }) => {
          return <TaskItem text={text} key={id} />
        })}
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  desk: {
    backgroundColor: '#9eb0d5',
    padding: 5,
    flex: 1,
  },
  desk_title: {
    marginBottom: 10,
    marginTop: 5,
  },
})
