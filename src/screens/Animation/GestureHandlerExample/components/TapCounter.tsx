import React, { useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  runOnJS,
} from 'react-native-reanimated';
import { styles } from '../GestureHandlerExample.styles';
import { COLORS } from '../GestureHandlerExample.constants';

/**
 * TapCounter - Demonstrates Tap Gesture (Single and Double)
 *
 * Tap gestures are used for:
 * - Button presses
 * - Double tap to like (Instagram)
 * - Double tap to zoom
 * - Long press for context menus
 */
export const TapCounter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [lastAction, setLastAction] = useState('Tap or double tap');

  const scale = useSharedValue(1);
  const backgroundColor = useSharedValue(COLORS.primary);

  const incrementCount = useCallback(() => {
    setCount(prev => prev + 1);
    setLastAction('Single tap +1');
  }, []);

  const incrementByFive = useCallback(() => {
    setCount(prev => prev + 5);
    setLastAction('Double tap +5!');
  }, []);

  const resetCount = useCallback(() => {
    setCount(0);
    setLastAction('Long press - Reset!');
  }, []);

  // Single tap gesture
  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .onStart(() => {
      scale.value = withSequence(
        withSpring(0.9),
        withSpring(1),
      );
      runOnJS(incrementCount)();
    });

  // Double tap gesture - must be detected before single tap
  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(2)
    .onStart(() => {
      scale.value = withSequence(
        withSpring(1.3),
        withSpring(1),
      );
      runOnJS(incrementByFive)();
    });

  // Long press gesture
  const longPress = Gesture.LongPress()
    .minDuration(500)
    .onStart(() => {
      scale.value = withSequence(
        withSpring(0.8),
        withSpring(1),
      );
      runOnJS(resetCount)();
    });

  // Compose gestures - order matters!
  // Double tap must be checked before single tap
  const composed = Gesture.Exclusive(doubleTap, singleTap, longPress);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tap Gestures - Counter</Text>
      <Text style={styles.sectionDescription}>
        Single tap: +1 | Double tap: +5 | Long press: Reset
        {'\n'}Shows how to combine multiple gesture types.
      </Text>

      <View style={styles.gestureArea}>
        <GestureDetector gesture={composed}>
          <Animated.View style={[styles.tapBox, animatedStyle]}>
            <Text style={styles.tapCount}>{count}</Text>
            <Text style={styles.tapLabel}>{lastAction}</Text>
          </Animated.View>
        </GestureDetector>
      </View>
    </View>
  );
};