import { useEffect } from 'react';

import {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
  Easing,
} from 'react-native-reanimated';
import { ANIMATION_DURATION } from '../ReactAnimationVsReanimated.constant';

export const useReanimated = () => {
  const reanimatedTranslateX = useSharedValue(0);
  const reanimatedRotation = useSharedValue(0);
  // Start Reanimated Animation
  useEffect(() => {
    reanimatedTranslateX.value = withRepeat(
      withSequence(
        withTiming(150, {
          duration: ANIMATION_DURATION,
          easing: Easing.inOut(Easing.ease),
        }),
        withTiming(0, {
          duration: ANIMATION_DURATION,
          easing: Easing.inOut(Easing.ease),
        }),
      ),
      -1,
      false,
    );

    reanimatedRotation.value = withRepeat(
      withTiming(360, {
        duration: ANIMATION_DURATION * 2,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, [reanimatedTranslateX, reanimatedRotation]);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: reanimatedTranslateX.value },
        { rotate: `${reanimatedRotation.value}deg` },
      ],
    };
  });
  return {
    reanimatedStyle,
  };
};
