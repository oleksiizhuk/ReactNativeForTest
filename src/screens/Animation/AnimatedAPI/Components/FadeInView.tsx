import React, { memo, ReactNode, useEffect, useRef } from 'react'
import { Animated } from 'react-native'

interface FadeInViewProps {
  children: ReactNode
  duration?: number
}
export const FadeInView = memo<FadeInViewProps>(
  ({ children, duration = 2000 }) => {
    const { timing, Value } = Animated
    const fadeAnim = useRef(new Value(0)).current // Initial value for opacity: 0

    useEffect(() => {
      timing(fadeAnim, {
        toValue: 1, // Animate to opacity: 1 (fully visible)
        duration: duration, // 2000ms
        useNativeDriver: true, // Add this line
      }).start()
    }, [duration, fadeAnim, timing])

    return (
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        {children}
      </Animated.View>
    )
  },
)
