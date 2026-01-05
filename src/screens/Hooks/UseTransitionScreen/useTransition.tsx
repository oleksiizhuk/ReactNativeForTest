import React, {
  memo,
  useCallback,
  useMemo,
  useState,
  useTransition,
} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Input } from '../../../components/Atoms/Input/Input'
import { City } from '../../../constant/city'

export const UseTransitionScreen = memo(() => {
  const [inputValue, setInputValue] = useState<string>('')
  const [, setFilteredValue] = useState<string>('')
  const [items] = useState<string[]>([...City, ...City])
  const [isPending, startTransition] = useTransition()
  console.log('isPending  = ', isPending)

  const handleChange = useCallback((newInputValue: string) => {
    setInputValue(newInputValue)
    startTransition(() => {
      setFilteredValue(newInputValue)
    })
  }, [])

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.includes(inputValue))
  }, [inputValue, items])

  return (
    <View style={styles.container}>
      <Input
        value={inputValue}
        onChangeText={handleChange}
        placeholder="Type here..."
      />
      {isPending && <Text>isLoading</Text>}
      {filteredItems.map((item: string, index: number) => (
        <View key={index}>
          <Text>
            {item} {inputValue}
          </Text>
        </View>
      ))}
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
})
