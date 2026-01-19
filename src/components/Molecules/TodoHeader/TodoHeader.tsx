import React, { memo } from 'react'
import { Text, View } from 'react-native'
import { styles } from '@screens/Todo/template/styles.ts'
import { Input } from '../../Atoms/Input/Input'
import { Button, ButtonType } from '../../Atoms/Button/Button'

interface TodoHeaderProps {
  value: string
  onChange: (value: string) => void
  addTodoItem: () => void
}
export const TodoHeader = memo<TodoHeaderProps>(
  ({ value, onChange, addTodoItem }) => {
    return (
      <>
        <View style={styles.header}>
          <Input value={value} onChangeText={onChange} />
          <Button
            text={'Add Todo'}
            type={ButtonType.Small}
            onPress={addTodoItem}
            disabled={!value.length}
          />
        </View>
        <View>
          <Text>Filter:</Text>
        </View>
        <View>
          <Button text={'Undo'} type={ButtonType.Small} />
          <Button text={'Redo'} type={ButtonType.Small} />
        </View>
      </>
    )
  },
)
