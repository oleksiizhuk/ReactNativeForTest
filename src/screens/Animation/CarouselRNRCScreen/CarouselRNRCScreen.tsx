import React from 'react'
import { CarouselWithLibraryView } from './CarouselRNRCScreenView'

const data = Array.from({ length: 5 }, (_, i) => ({
  id: i.toString(),
  cardNumber: `**** ${3456 + i}`,
  expiry: '12 / 24',
  type: 'Student',
  bank: 'Bank of Ireland',
  bg: '#000000',
}))

export const CarouselWithLibrary = () => {
  return <CarouselWithLibraryView data={data} />
}
