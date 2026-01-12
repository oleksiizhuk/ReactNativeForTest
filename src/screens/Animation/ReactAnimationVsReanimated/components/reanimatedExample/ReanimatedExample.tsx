import { View, Text } from 'react-native';
import { styles } from '../../ReactAnimationVsReanimated.styles';
import Animated from 'react-native-reanimated';
import React from 'react';
import { useReanimated } from '../../hooks/useReanimated';

export const ReanimatedExample = () => {
  const { reanimatedStyle } = useReanimated();

  return (
    <View style={styles.animationContainer}>
      <Text style={styles.label}>Reanimated</Text>
      <Text style={styles.labelSmall}>(UI Thread)</Text>
      <View style={styles.animationTrack}>
        <Animated.View
          style={[styles.box, styles.reanimatedBox, reanimatedStyle]}
        />
      </View>
    </View>
  );
};
