import React, { memo, useCallback } from 'react'
import { View, FlatList, ListRenderItemInfo } from 'react-native'
import { TodoItem } from '../../Molecules/TodoItem/TodoItem'
import { TodoTemplateProps, TodoItemType } from './types'
import { styles } from './styles'
import { TodoHeader } from '../../Molecules/TodoHeader/TodoHeader'

export const TodoTemplate = memo(
  ({
    todoListData,
    value,
    onChange,
    addTodoItem,
    onDelete,
  }: TodoTemplateProps) => {
    const renderItem = useCallback(
      ({ item: { id, text } }: ListRenderItemInfo<TodoItemType>) => {
        return (
          <TodoItem
            id={id}
            text={text}
            onDelete={onDelete}
            onComplete={() => {}}
            onEdit={() => {}}
          />
        )
      },
      [onDelete],
    )

    return (
      <View style={styles.container}>
        <FlatList
          data={todoListData}
          ListHeaderComponent={
            <TodoHeader
              value={value}
              onChange={onChange}
              addTodoItem={addTodoItem}
            />
          }
          renderItem={renderItem}
        />
      </View>
    )
  },
)
