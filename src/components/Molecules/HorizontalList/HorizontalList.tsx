import React, { memo } from 'react'
import { FlatList, ListRenderItem } from 'react-native'

interface HorizontalListProps<T> {
  list?: T[]
  renderItem: ListRenderItem<T>
}
export const HorizontalList = memo(
  <T extends {}>({ list, renderItem }: HorizontalListProps<T>) => {
    return <FlatList data={list} renderItem={renderItem} horizontal />
  },
)
