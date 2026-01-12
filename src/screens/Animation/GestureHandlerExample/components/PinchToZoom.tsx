import React from 'react';
import { View, Text } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { styles } from '../GestureHandlerExample.styles';
import { COLORS } from '../GestureHandlerExample.constants';

/**
 * PinchToZoom - Demonstrates Pinch Gesture
 *
 * Pinch gesture is used for:
 * - Image zoom (like in photo gallery)
 * - Map zoom
 * - Document zoom
 * - Any scale-based interaction
 */
export const PinchToZoom: React.FC = () => {
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  // Create pinch gesture
  const pinchGesture = Gesture.Pinch()
    .onStart(() => {
      savedScale.value = scale.value;
    })
    .onUpdate(event => {
      // Clamp scale between 0.5 and 3
      const newScale = savedScale.value * event.scale;
      scale.value = Math.min(Math.max(newScale, 0.5), 3);
    })
    .onEnd(() => {
      // Optionally spring back to 1 if scale is close
      if (scale.value < 0.8) {
        scale.value = withSpring(1);
      } else if (scale.value > 2.5) {
        scale.value = withSpring(2);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Pinch Gesture - Zoom</Text>
      <Text style={styles.sectionDescription}>
        Use two fingers to pinch and zoom the element.
        Scale is clamped between 0.5x and 3x.
      </Text>

      <View style={styles.zoomContainer}>
        <GestureDetector gesture={pinchGesture}>
          <Animated.View style={[styles.zoomImage, animatedStyle]}>
            <Text style={{ fontSize: 40 }}>🖼️</Text>
            <Text style={{ color: COLORS.background, fontWeight: '600', marginTop: 8 }}>
              Pinch me
            </Text>
          </Animated.View>
        </GestureDetector>
      </View>
    </View>
  );
};