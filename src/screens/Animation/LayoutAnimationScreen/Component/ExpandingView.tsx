import React, { ReactNode, useState, memo, useCallback, useMemo } from 'react'
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
  StyleSheet,
} from 'react-native'

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

interface ExpandingViewProps {
  children: ReactNode
}
export const ExpandingView = memo<ExpandingViewProps>(({ children }) => {
  const [expanded, setExpanded] = useState(false)

  const onPress = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    setExpanded(!expanded)
  }, [expanded])

  const heightComponent = useMemo(() => {
    return expanded ? 200 : 100
  }, [expanded])

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { height: heightComponent }]}>
        {children}
      </View>
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
  },
})
