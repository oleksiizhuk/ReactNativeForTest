import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated'

const { width } = Dimensions.get('window')
const ITEM_WIDTH = width * 0.9 // Width of each card
const ITEM_SPACING = (width - ITEM_WIDTH) / 2 // Spacing between cards

const data = Array.from({ length: 20 }, (_, i) => ({
  id: i.toString(),
  cardNumber: `**** ${3456 + i}`,
  expiry: '12 / 24',
  type: 'Student',
  bank: 'Bank of Ireland',
}))

export const CarouselReanimatedScreen = () => {
  const scrollX = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x
    },
  })

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: ITEM_SPACING }}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="normal"
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        renderItem={({ item }) => (
          <Animated.View style={styles.card}>
            <Text style={styles.bankText}>{item.bank}</Text>
            <Text style={styles.cardNumber}>{item.cardNumber}</Text>
            <Text style={styles.expiryText}>Expiry date: {item.expiry}</Text>
            <Text style={styles.cardType}>{item.type}</Text>
          </Animated.View>
        )}
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
  bankText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardNumber: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  expiryText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  cardType: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: '#4caf50',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    overflow: 'hidden',
  },
})
