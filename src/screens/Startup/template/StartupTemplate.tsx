import React, { memo } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Brand } from '@components/Atoms'
import { useTheme } from '@hooks/index.ts'

export const StartupTemplate = memo(() => {
  const { Layout, Gutters } = useTheme()

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
    </View>
  )
})
