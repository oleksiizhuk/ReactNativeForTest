// @ts-nocheck
// @ts-ignore
import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

/**
 * Expected result (string, no tabulations):
 * <body>
 *   <p>Hello, world</p>
 *   <div>
 *     <p>Hello, inner content</p>
 *   </div>
 * </body>
 */
const tree = {
  name: 'body',
  children: [
    {
      name: 'p',
      children: 'Hello ,world',
    },
    {
      name: 'div',
      children: [
        {
          name: 'div',
          children: [
            {
              name: 'p',
              children: 'Hello, inner content',
            },
          ],
        },
        {
          name: 'p',
          children: '',
        },
      ],
    },
  ],
}
export const JSHTMLTreeScreen = memo(() => {
  const render = (inputTree) => {
    const array = []
    const generation = (node, arr) => {
      const { children, name } = node
      if (Array.isArray(children)) {
        arr.push(`<${name}>`)
        for (let i = 0; i < children.length; i++) {
          generation(children[i], arr)
        }
        return arr.push(`</${name}>`)
      } else if (typeof children === 'string') {
        return arr.push(`<${name}> ${children ? children : 'empty'} </${name}>`)
      }
    }
    generation(inputTree, array)
    return array
  }

  const result = render(tree)
  console.log('result = ', result)
  return (
    <View style={styles.container}>
      <Text>JSHTMLTree</Text>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {},
})
