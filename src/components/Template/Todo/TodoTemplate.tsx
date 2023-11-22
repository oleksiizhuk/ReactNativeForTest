import React, { memo, useCallback } from 'react';
import { View, Text, FlatList, ListRenderItemInfo } from 'react-native';
import { Input } from '../../Atoms/Input/Input';
import { Button, ButtonType } from '../../Atoms/Button/Button';
import { TodoItem } from '../../Molecules/TodoItem/TodoItem';
import { TodoTemplateProps, Data } from './types';
import { styles } from './styles';

const fakeData = [
  { id: 1, text: 'text 1' },
  { id: 2, text: 'text 2' },
];

export const TodoTemplate = memo(({ data = fakeData }: TodoTemplateProps) => {
  const header = useCallback(() => {
    return (
      <>
        <View style={styles.header}>
          <Input value={''} onChangeText={() => {}} />
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
  }, []);

  const renderItem = useCallback(
    ({ item: { id, text } }: ListRenderItemInfo<Data>) => {
      return (
        <TodoItem
          id={id}
          text={text}
          onDelete={() => {}}
          onComplete={() => {}}
          onEdit={() => {}}
        />
      );
    },
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        ListHeaderComponent={header}
        renderItem={renderItem}
      />
    </View>
  );
});
