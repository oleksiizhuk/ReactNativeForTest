import { View, Text, Animated as RNAnimated } from 'react-native';
import { styles } from '../../ReactAnimationVsReanimated.styles.tsx';

import React from 'react';
import { useReactAnimation } from '../../hooks/useReactAnimation.ts';

export const ReactAnimationExample = () => {
  const { rnTranslateX, rnRotationInterpolate } = useReactAnimation();

  return (
    <View style={styles.animationContainer}>
      <Text style={styles.label}>React Animated</Text>
      <Text style={styles.labelSmall}>(JS Thread)</Text>
      <View style={styles.animationTrack}>
        <RNAnimated.View
          style={[
            styles.box,
            styles.rnBox,
            {
              transform: [
                { translateX: rnTranslateX },
                { rotate: rnRotationInterpolate },
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};
