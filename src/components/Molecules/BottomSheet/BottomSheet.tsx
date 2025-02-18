import React, { useCallback, useMemo, RefObject } from 'react'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import { StyleSheet, View } from 'react-native'
import { Title } from '../../Atoms/Title/Title'

interface BottomSheetProps {
  children: React.ReactElement
  bottomSheetModalRef?: RefObject<BottomSheetModalMethods>
  title?: string
}

export const BottomSheet = ({
  children,
  bottomSheetModalRef,
  title,
}: BottomSheetProps) => {
  const snapPoints = useMemo(() => ['25%', '50%'], [])
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <>
          {title ? (
            <View style={styles.title}>
              <Title title={'Awesome'} />
            </View>
          ) : null}
          {children}
        </>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  )
}

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
  },
})
