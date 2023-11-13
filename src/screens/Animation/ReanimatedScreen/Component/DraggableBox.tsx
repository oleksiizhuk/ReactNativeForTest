import React, { ReactNode, memo } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

interface DraggableBox {
  children?: ReactNode;
}

export const DraggableBox = memo<DraggableBox>(({ children }) => {
  const offset = useSharedValue({ x: 0, y: 0 });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = offset.value.x;
      context.startY = offset.value.y;
    },
    onActive: (event, context) => {
      offset.value = {
        x: context.startX + event.translationX,
        y: context.startY + event.translationY,
      };
    },
    onEnd: () => {
      offset.value = withSpring({ x: 0, y: 0 });
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.box, animatedStyle]}>
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
});

const styles = {
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
};
