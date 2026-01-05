import React from 'react'
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const { width } = Dimensions.get('window')
const ITEM_WIDTH = width * 0.75 // Ширина карточки уменьшена для видимости соседних
console.log(ITEM_WIDTH)
const SPACING = 3 // Отступ между карточками

const data = [
  {
    id: '1',
    title: 'Personal',
    image: 'https://via.placeholder.com/300x200/007AFF',
  },
  {
    id: '2',
    title: 'Student',
    image: 'https://via.placeholder.com/300x200/FF5733',
  },
  {
    id: '3',
    title: 'Business',
    image: 'https://via.placeholder.com/300x200/33C3FF',
  },
]

export const CarouselScreen = () => {
  const translateX = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x
    },
  })

  return (
    <GestureHandlerRootView style={styles.container}>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: (width - ITEM_WIDTH) / 2 + SPACING / 2, // Добавляем немного места справа
        }}
        snapToInterval={ITEM_WIDTH + SPACING} // Центровка по элементам
        decelerationRate="fast"
        scrollEventThrottle={16}
        onScroll={scrollHandler}
      >
        {data.map((item, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const animatedStyle = useAnimatedStyle(() => {
            const inputRange = [
              (ITEM_WIDTH + SPACING) * (index - 1),
              (ITEM_WIDTH + SPACING) * index,
              (ITEM_WIDTH + SPACING) * (index + 1),
            ]

            const scale = interpolate(
              translateX.value,
              inputRange,
              [0.8, 1, 0.8], // Масштабирование соседних карточек
              'clamp',
            )

            const opacity = interpolate(
              translateX.value,
              inputRange,
              [0.5, 1, 0.5], // Прозрачность соседних карточек
              'clamp',
            )

            return {
              transform: [{ scale }],
              opacity,
            }
          })

          return (
            <View key={item.id} style={[styles.itemContainer]}>
              <Animated.View style={[styles.card, animatedStyle]}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
              </Animated.View>
            </View>
          )
        })}
      </Animated.ScrollView>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Светло-серый фон для контраста
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: ITEM_WIDTH + SPACING, // Увеличиваем ширину контейнера, чтобы добавить место для соседних карточек
    alignItems: 'center',
  },
  card: {
    width: ITEM_WIDTH,
    height: 200,
    borderRadius: 15,
    backgroundColor: 'blue', // Цвет карточки - светло-серый
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Тёмный текст для хорошей видимости
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Полупрозрачный белый фон для текста
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
})
