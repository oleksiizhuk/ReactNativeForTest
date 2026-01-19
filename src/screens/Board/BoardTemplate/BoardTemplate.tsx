import React, { memo, useRef, useCallback } from 'react'
import { View, Text } from 'react-native'
import { Desk } from '@components/Organisms/Desk/Desk.tsx'
import { TaskItem } from '@components/Molecules/TaskItem/TaskItem.tsx'
import { HorizontalList } from '@components/Molecules/HorizontalList/HorizontalList.tsx'
import { BottomSheet } from '@components/Molecules/BottomSheet/BottomSheet.tsx'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { Button } from '@components/Atoms/Button/Button.tsx'
import { BoardTemplateProps } from '@screens/Board/BoardTemplate/BoardTemplate.type.ts'
import { BoardTemplateStyles } from '@screens/Board/BoardTemplate/BoardTemplate.styles.ts'

export const BoardTemplate = memo<BoardTemplateProps>(
  ({ waitingList, inProgressList, recommendationList, doneList }) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null)
    const handlePresentModalPress = useCallback(() => {
      bottomSheetModalRef.current?.present()
    }, [])
    const styles = BoardTemplateStyles()

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
        {/*// @ts-ignore*/}
        <BottomSheet bottomSheetModalRef={bottomSheetModalRef}>
          <View style={styles.BottomSheetContainer}>
            <View style={styles.content}>
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
    );
  },
)
