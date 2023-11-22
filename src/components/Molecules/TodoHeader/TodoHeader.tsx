import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../Template/Todo/styles';
import { Input } from '../../Atoms/Input/Input';
import { Button, ButtonType } from '../../Atoms/Button/Button';

interface TodoHeaderProps {
  value: string;
  onChange: (value: string) => void;
}
export const TodoHeader = memo<TodoHeaderProps>(({ value, onChange }) => {
  return (
    <>
      <View style={styles.header}>
        <Input value={value} onChangeText={onChange} />
        <Button text={'Add Todo'} type={ButtonType.Small} />
      </View>
      <View>
        <Text>Filter:</Text>
      </View>
      <View>
        <Button text={'Undo'} type={ButtonType.Small} />
        <Button text={'Redo'} type={ButtonType.Small} />
      </View>
    </>
  );
});
