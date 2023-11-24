import React, { memo, useRef, useCallback } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Desk } from '../../Organisms/Desk/Desk'
import { TaskItem } from '../../Molecules/TaskItem/TaskItem'
import { HorizontalList } from '../../Molecules/HorizontalList/HorizontalList'
import { BottomSheet } from '../../Molecules/BottomSheet/BottomSheet'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { Button } from '../../Atoms/Button/Button'

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
    const bottomSheetModalRef = useRef<BottomSheetModal>(null)
    const handlePresentModalPress = useCallback(() => {
      bottomSheetModalRef.current?.present()
    }, [])

    return (
      <View style={styles.container}>
        <View>
          <HorizontalList
            list={recommendationList}
            renderItem={({ item }) => (
              <TaskItem {...item} onPress={handlePresentModalPress} />
            )}
          />
        </View>
        <View style={styles.deskContainer}>
          <Desk title={'Waiting'} itemList={waitingList} />
          <Desk title={'In Progress'} itemList={inProgressList} />
          <Desk title={'Done'} itemList={doneList} />
        </View>
        <BottomSheet bottomSheetModalRef={bottomSheetModalRef}>
          <View style={{ marginHorizontal: 8, flex: 1 }}>
            <View style={{ flex: 1 }}>
              <View>
                <Text>Change status: </Text>
              </View>
              <View>
                <Text>Change message: </Text>
              </View>
            </View>
            <Button text={'Apply'} onPress={() => {}} disabled={true} />
          </View>
        </BottomSheet>
      </View>
    )
  },
)

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flex: 1,
  },
  deskContainer: {
    flexDirection: 'row',
    minHeight: '50%',
  },
})
