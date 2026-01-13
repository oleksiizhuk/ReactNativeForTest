import React, { memo, useRef, useCallback } from 'react'
import { View, Text } from 'react-native'
import { Desk } from '../../Organisms/Desk/Desk'
import { TaskItem } from '../../Molecules/TaskItem/TaskItem'
import { HorizontalList } from '../../Molecules/HorizontalList/HorizontalList'
import { BottomSheet } from '../../Molecules/BottomSheet/BottomSheet'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { Button } from '../../Atoms/Button/Button'
import { BoardTemplateProps } from './BoardTemplate.type'
import { BoardTemplateStyles } from './BoardTemplate.styles'

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
