import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated'

const { width } = Dimensions.get('window')
const ITEM_WIDTH = width * 0.8
const ITEM_SPACING = (width - ITEM_WIDTH) / 2

const data = Array.from({ length: 5 }, (_, i) => ({
  id: i.toString(),
  title: `Card ${i + 1}`,
}))

export const CarouselScreen = () => {
  const scrollX = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x
    },
  })

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: ITEM_SPACING }}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        scrollEventThrottle={16}
        onScroll={scrollHandler}
      >
        {data.map((item, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const animatedStyle = useAnimatedStyle(() => {
            const scale = interpolate(
              scrollX.value,
              [
                (index - 1) * ITEM_WIDTH,
                index * ITEM_WIDTH,
                (index + 1) * ITEM_WIDTH,
              ],
              [0.9, 1, 0.9],
              Extrapolate.CLAMP,
            )

            return {
              transform: [{ scale }],
            }
          })

          return (
            <Animated.View key={item.id} style={[styles.card, animatedStyle]}>
              <Text style={styles.cardText}>{item.title}</Text>
            </Animated.View>
          )
        })}
      </Animated.ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: ITEM_WIDTH,
    height: 200,
    marginHorizontal: 10,
    backgroundColor: '#002f6c',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
