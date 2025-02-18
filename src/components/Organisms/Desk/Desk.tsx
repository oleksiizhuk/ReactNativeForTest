import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TaskItem } from '../../Molecules/TaskItem/TaskItem'

interface DeskProps {
  title: string
  itemList?: any[]
  time?: string
}
export const Desk = memo<DeskProps>(({ title, itemList = [], time = '1h' }) => {
  return (
    <View style={styles.desk}>
      <View style={styles.titleContainer}>
        <Text style={styles.desk_title}>{title}</Text>
        <Text>{`Time: ${time}`}</Text>
      </View>
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
  titleContainer: {
    marginBottom: 10,
    marginTop: 5,
  },
  desk_title: {},
})
