import React from 'react';
import { View, Text } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { styles } from '../GestureHandlerExample.styles';

/**
 * DraggableBox - Demonstrates Pan Gesture
 *
 * Pan gesture is used for:
 * - Drag and drop functionality
 * - Slider controls
 * - Moving items in a list
 * - Drawing/painting apps
 */
export const DraggableBox: React.FC = () => {
  // Shared values for position - these run on UI thread
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Store the position when gesture starts
  const contextX = useSharedValue(0);
  const contextY = useSharedValue(0);

  // Scale for visual feedback when dragging
  const scale = useSharedValue(1);

  // Create pan gesture
  const panGesture = Gesture.Pan()
    .onStart(() => {
      // Save current position when starting drag
      contextX.value = translateX.value;
      contextY.value = translateY.value;
      // Scale up slightly when grabbed
      scale.value = withSpring(1.1);
    })
    .onUpdate(event => {
      // Update position based on gesture translation
      translateX.value = contextX.value + event.translationX;
      translateY.value = contextY.value + event.translationY;
    })
    .onEnd(() => {
      // Spring back to center when released
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
      scale.value = withSpring(1);
    });

  // Animated style - runs on UI thread for smooth 60fps
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Pan Gesture - Draggable Box</Text>
      <Text style={styles.sectionDescription}>
        Drag the box around. It springs back to center when released.
        This demonstrates how Pan gesture tracks finger movement.
      </Text>

      <View style={styles.gestureArea}>
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.draggableBox, animatedStyle]}>
            <Text style={styles.boxText}>DRAG ME</Text>
          </Animated.View>
        </GestureDetector>
      </View>
    </View>
  );
};