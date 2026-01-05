import React from 'react'
import { View, Dimensions } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import { Cart } from './compoent/Cart/Cart'

const width = Dimensions.get('window').width

interface CarouselWithLibraryViewProps {
  data: any
}

export const CarouselWithLibraryView = ({
  data,
}: CarouselWithLibraryViewProps) => {
  return (
    <View>
      <Carousel
        loop
        width={width}
        height={255}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={({ item }: any) => (
          <Cart
            bg={item.bg}
            type={item.type}
            cardNumber={item.cardNumber}
            name={'Name '}
          />
        )}
      />
    </View>
  )
}
