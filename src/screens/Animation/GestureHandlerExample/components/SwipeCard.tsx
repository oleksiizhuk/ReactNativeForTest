import React, { useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { styles } from '../GestureHandlerExample.styles';
import { SCREEN_WIDTH, SWIPE_THRESHOLD, COLORS } from '../GestureHandlerExample.constants';

/**
 * SwipeCard - Demonstrates Fling/Swipe Gesture with Pan
 *
 * Swipe gestures are used for:
 * - Tinder-like card swiping
 * - Dismissing notifications
 * - Delete actions in lists
 * - Navigation between screens
 */
export const SwipeCard: React.FC = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const translateX = useSharedValue(0);
  const rotate = useSharedValue(0);

  const cards = [
    { id: 1, text: 'Card 1', color: COLORS.primary },
    { id: 2, text: 'Card 2', color: COLORS.accent },
    { id: 3, text: 'Card 3', color: COLORS.success },
    { id: 4, text: 'Card 4', color: COLORS.warning },
  ];

  const nextCard = useCallback(() => {
    setCardIndex(prev => (prev + 1) % cards.length);
  }, [cards.length]);

  const panGesture = Gesture.Pan()
    .onUpdate(event => {
      translateX.value = event.translationX;
      // Rotate slightly based on swipe direction
      rotate.value = interpolate(
        event.translationX,
        [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        [-15, 0, 15],
        Extrapolation.CLAMP,
      );
    })
    .onEnd(event => {
      // Check if swiped past threshold
      if (Math.abs(translateX.value) > SWIPE_THRESHOLD) {
        // Swipe off screen
        const direction = translateX.value > 0 ? 1 : -1;
        translateX.value = withTiming(
          direction * SCREEN_WIDTH * 1.5,
          { duration: 300 },
          () => {
            // Reset and show next card
            translateX.value = 0;
            rotate.value = 0;
            runOnJS(nextCard)();
          },
        );
        rotate.value = withTiming(direction * 30, { duration: 300 });
      } else {
        // Spring back to center
        translateX.value = withSpring(0);
        rotate.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { rotate: `${rotate.value}deg` },
    ],
    opacity: interpolate(
      Math.abs(translateX.value),
      [0, SCREEN_WIDTH / 2],
      [1, 0.5],
      Extrapolation.CLAMP,
    ),
  }));

  const currentCard = cards[cardIndex];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Swipe Gesture - Cards</Text>
      <Text style={styles.sectionDescription}>
        Swipe the card left or right to dismiss it.
        The card rotates and fades as you swipe.
      </Text>

      <View style={styles.swipeContainer}>
        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={[
              styles.swipeCard,
              { backgroundColor: currentCard.color },
              animatedStyle,
            ]}>
            <Text style={styles.swipeCardText}>{currentCard.text}</Text>
            <Text style={styles.swipeHint}>← Swipe left or right →</Text>
          </Animated.View>
        </GestureDetector>
      </View>

      {/* Card indicator */}
      <View style={styles.indicator}>
        {cards.map((card, index) => (
          <View
            key={card.id}
            style={[
              styles.indicatorDot,
              index === cardIndex && styles.indicatorDotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};