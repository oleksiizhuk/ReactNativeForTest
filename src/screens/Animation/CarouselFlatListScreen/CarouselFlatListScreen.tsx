import React, { useRef } from 'react'
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native'

const { width } = Dimensions.get('window')
const ITEM_WIDTH = width * 0.8 // Ширина карточки
const ITEM_SPACING = (width - ITEM_WIDTH) / 2 // Отступ между карточками

const data = Array.from({ length: 5 }, (_, i) => ({
  id: i.toString(),
  title: `Card ${i + 1}`,
}))

export const CarouselFlatListScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.id}
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
          // Анимационный стиль
          const inputRange = [
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
          ]

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
          })

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.7, 1, 0.7],
            extrapolate: 'clamp',
          })

          return (
            <Animated.View
              style={[
                styles.card,
                { transform: [{ scale }], opacity }, // Анимация
              ]}
            >
              <Text style={styles.cardText}>{item.title}</Text>
            </Animated.View>
          )
        }}
      />
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
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
