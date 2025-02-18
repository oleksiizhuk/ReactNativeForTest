import React, { memo } from 'react'
import { View, Text } from 'react-native'
import { SuspenseViewProps } from './SuspenseView.types'

export const SuspenseView = memo<SuspenseViewProps>(
  ({ error, loading, children }) => {
    if (loading) {
      return (
        <View>
          <Text>...loading</Text>
        </View>
      )
    }

    if (error) {
      return (
        <View>
          <Text>...error</Text>
        </View>
      )
    }

    return <>{children}</>
  },
)
