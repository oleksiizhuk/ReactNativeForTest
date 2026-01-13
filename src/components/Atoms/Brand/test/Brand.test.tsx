import React from 'react'
import { render, screen } from '@testing-library/react-native'
import { Brand } from '../Brand'
import { Provider } from 'react-redux'
import { store } from '../../../../store'

test('render correctly', () => {
  const component = (
    <Provider store={store}>
      <Brand />
    </Provider>
  )

  render(component)

  const wrapper = screen.getByTestId('Brand-img-wrapper')
  const img = screen.getByTestId('Brand-img')

  expect(wrapper.props.style.height).toBe(200)
  expect(wrapper.props.style.width).toBe(200)
  expect(img.props.resizeMode).toBe('contain')
})
