import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface TaskItemProps {
  text?: string
  status?: string // Add status to represent the ticket status like 'In Progress', 'Done', etc.
}

export const TaskItem = memo<TaskItemProps>(({ text = 'a', status }) => {
  console.log('text = ', text)
  return (
    <View style={styles.taskContainer}>
      <View style={styles.imageContainer}>
        <Text>Image</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
      {status ? (
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      ) : null}
    </View>
  )
})

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#f4f5f7',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
    minHeight: 60,
    maxWidth: 150,
  },
  imageContainer: {
    marginRight: 10,
    width: 40,
    height: 40,
    backgroundColor: '#dfe1e6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    // flex: 1,
  },
  textStyle: {
    color: '#172b4d',
    fontWeight: 'bold',
  },
  statusContainer: {
    backgroundColor: '#ebecf0',
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  statusText: {
    color: '#5e6c84',
    fontSize: 12,
  },
})
