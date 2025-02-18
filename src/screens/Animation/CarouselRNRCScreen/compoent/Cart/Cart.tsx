import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface CartProps {
  bg: string
  type: string
  cardNumber: string
  name: string
}
const height = Dimensions.get('window').height

export const Cart = ({ bg, type, cardNumber, name }: CartProps) => {
  return (
    <View style={styles.Container}>
      <View style={[styles.creditCard, { backgroundColor: bg }]}>
        <View style={styles.creditAndVisaView}>
          <Text style={styles.creditText}>{type}</Text>
        </View>
        <View style={styles.cardDetailsView}>
          <Text style={styles.cardDetailsText}>{name}</Text>
          <Text style={styles.cardDetailsText}>{cardNumber}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  creditCard: {
    width: '80%',
    height: height * 0.25,
    borderRadius: 20,
    padding: 30,
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: 'red',
  },
  creditAndVisaView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  creditText: {
    color: '#FFFFFF',
    fontSize: 16,
    letterSpacing: 2,
    fontFamily: 'Ubuntu-Regular',
    includeFontPadding: false,
  },
  cardDetailsView: {
    flexDirection: 'column',
  },
  cardDetailsText: {
    color: '#FFFFFF',
    fontFamily: 'IBMPlexMono-Regular',
    fontSize: 16,
    letterSpacing: 2,
    paddingTop: '2.5%',
    includeFontPadding: false,
  },
  Container: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'blue',
  },
})
