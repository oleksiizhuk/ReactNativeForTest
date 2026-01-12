import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles } from './GestureHandlerExample.styles';
import {
  DraggableBox,
  PinchToZoom,
  SwipeCard,
  TapCounter,
} from './components';

/**
 * GestureHandlerExample
 *
 * This screen demonstrates React Native Gesture Handler (RNGH) and why it's
 * better than React Native's built-in touch system.
 *
 * WHY USE GESTURE HANDLER?
 *
 * 1. RUNS ON UI THREAD
 *    - RN's TouchableOpacity/PanResponder runs on JS thread
 *    - Gesture Handler runs on native UI thread
 *    - Result: Smoother, more responsive gestures
 *
 * 2. BETTER GESTURE RECOGNITION
 *    - Native gesture recognizers (iOS UIGestureRecognizer, Android GestureDetector)
 *    - More accurate than JS-based detection
 *    - Proper gesture state machine (BEGAN, ACTIVE, END, etc.)
 *
 * 3. COMPOSABLE GESTURES
 *    - Easily combine gestures (pan + pinch + rotate)
 *    - Handle conflicts automatically (e.g., scroll vs swipe)
 *    - Simultaneous, exclusive, or sequential gesture handling
 *
 * 4. WORKS WITH REANIMATED
 *    - Seamless integration with Reanimated 2/3
 *    - Gesture callbacks run as worklets on UI thread
 *    - No JS bridge delay
 */
export const GestureHandlerExample: React.FC = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>React Native Gesture Handler</Text>
        <Text style={styles.subtitle}>
          Native-driven gestures for smooth 60fps interactions
        </Text>

        {/* Pan Gesture Example */}
        <DraggableBox />

        {/* Pinch Gesture Example */}
        <PinchToZoom />

        {/* Swipe Gesture Example */}
        <SwipeCard />

        {/* Tap Gesture Example */}
        <TapCounter />

        {/* Explanation Section */}
        <View style={styles.explanationSection}>
          <Text style={styles.explanationTitle}>
            Why Gesture Handler over TouchableOpacity?
          </Text>

          <Text style={styles.explanationText}>
            <Text style={styles.bold}>1. Performance:</Text> React Native's
            built-in touch system (TouchableOpacity, PanResponder) runs on the
            JavaScript thread. When JS is busy, touch response is delayed.
            Gesture Handler runs on the native UI thread.
          </Text>

          <Text style={styles.explanationText}>
            <Text style={styles.bold}>2. Native Feel:</Text> Uses platform-native
            gesture recognizers (UIGestureRecognizer on iOS, GestureDetector on
            Android) for proper touch handling that users expect.
          </Text>

          <Text style={styles.explanationText}>
            <Text style={styles.bold}>3. Complex Gestures:</Text> Easily handle
            pinch-to-zoom, rotation, and pan simultaneously. Try doing that
            with PanResponder!
          </Text>

          <Text style={styles.explanationText}>
            <Text style={styles.bold}>4. Reanimated Integration:</Text> Combined
            with Reanimated, gesture callbacks run as worklets on the UI thread,
            enabling truly native-feeling interactions.
          </Text>

          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {`// Basic gesture setup
const panGesture = Gesture.Pan()
  .onStart(() => { /* worklet */ })
  .onUpdate((e) => {
    // Runs on UI thread!
    translateX.value = e.translationX;
  })
  .onEnd(() => {
    translateX.value = withSpring(0);
  });

<GestureDetector gesture={panGesture}>
  <Animated.View style={animatedStyle} />
</GestureDetector>`}
            </Text>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default GestureHandlerExample;