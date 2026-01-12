import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { ITEM_WIDTH, ITEM_SPACING } from './CarouselFlatListScreen.constants';
import { useStyles } from './CarouselFlatListScreen.styles';

const data = Array.from({ length: 5 }, (_, i) => ({
  id: i.toString(),
  title: `Card ${i + 1}`,
}));

export const CarouselFlatListScreen = () => {
  const styles = useStyles();
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: ITEM_SPACING }}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.7, 1, 0.7],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={[
                styles.card,
                { transform: [{ scale }], opacity }, // Анимация
              ]}
            >
              <Text style={styles.cardText}>{item.title}</Text>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};
