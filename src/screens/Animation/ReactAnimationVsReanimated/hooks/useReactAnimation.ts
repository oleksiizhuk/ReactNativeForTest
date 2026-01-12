import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { ANIMATION_DURATION } from '../ReactAnimationVsReanimated.constant';
export const useReactAnimation = () => {
  const rnTranslateX = useRef(new Animated.Value(0)).current;
  const rnRotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const translateAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(rnTranslateX, {
          toValue: 150,
          duration: ANIMATION_DURATION,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(rnTranslateX, {
          toValue: 0,
          duration: ANIMATION_DURATION,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );
    const rotateAnimation = Animated.loop(
      Animated.timing(rnRotation, {
        toValue: 1,
        duration: ANIMATION_DURATION * 2,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    translateAnimation.start();
    rotateAnimation.start();

    return () => {
      translateAnimation.stop();
      rotateAnimation.stop();
    };
  }, [rnTranslateX, rnRotation]);

  const rnRotationInterpolate = rnRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return {
    rnTranslateX,
    rnRotation,
    rnRotationInterpolate,
  };
};
