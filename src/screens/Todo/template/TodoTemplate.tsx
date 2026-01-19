import React, { memo, useCallback } from 'react';
import { View, FlatList, ListRenderItemInfo } from 'react-native';
import { TodoItem } from '@components/Molecules';
import {
  TodoTemplateProps,
  TodoItemType,
} from 'src/screens/Todo/template/types.ts';
import { TodoHeader } from '@components/Molecules';
import { styles } from 'src/screens/Todo/template/styles.ts';

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
        );
      },
      [onDelete],
    );

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
    );
  },
);
