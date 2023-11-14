import React, { memo, useCallback, useState, useTransition } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Input } from '../../../components/atoms/Input/Input';
import { City } from '../../../constant/city';
import { Button, ButtonType } from '../../../components/atoms/Button/Button';

interface UseTransitionScreenProps {}

export const UseTransitionScreen: React.FC<UseTransitionScreenProps> = memo(
  () => {
    const [tab, setTab] = useState<number>(1);
    const [inputValue, setInputValue] = useState<string>('');
    const [list, setList] = useState<string[]>([...City, ...City]);
    const [isPending, startTransition] = useTransition();

    // const handleChange = useCallback((newInputValue: string) => {
    //   setInputValue(newInputValue);
    //   startTransition(() => {
    //     setList(filterListBasedOnInput(newInputValue));
    //   });
    // }, []);

    const selectTab = useCallback((nextTab: number) => {
      startTransition(() => {
        setTab(nextTab);
      });
    }, []);

    const renderListItem = useCallback(({ item }: { item: string }) => {
      return <Text>{item}</Text>;
    }, []);

    return (
      <View style={styles.container}>
        {/*<Input*/}
        {/*  value={inputValue}*/}
        {/*  onChangeText={handleChange}*/}
        {/*  placeholder="Type here..."*/}
        {/*/>*/}
        <View style={styles.buttonContainer}>
          <Button
            type={ButtonType.Small}
            text={'first'}
            onPress={() => selectTab(1)}
            styleContainer={tab === 1 ? styles.activeButton : {}}
          />
          <Button
            type={ButtonType.Small}
            text={'second'}
            onPress={() => selectTab(2)}
            styleContainer={tab === 2 ? styles.activeButton : {}}
          />
          <Button
            type={ButtonType.Small}
            text={'third'}
            onPress={() => selectTab(3)}
            styleContainer={tab === 3 ? styles.activeButton : {}}
          />
        </View>
        {tab === 1 && (
          <FlatList
            data={list}
            renderItem={renderListItem}
            keyExtractor={(item, index) => `list-item-${index}`}
          />
        )}
        {tab === 2 && (
          <FlatList
            data={[...list, ...list, ...list]}
            renderItem={renderListItem}
            keyExtractor={(item, index) => `list-item-${index}`}
          />
        )}
        {tab === 3 && (
          <FlatList
            data={list}
            renderItem={renderListItem}
            keyExtractor={(item, index) => `list-item-${index}`}
          />
        )}
      </View>
    );
  },
);

const filterListBasedOnInput = (input: string) => {
  return City.filter(item => item.includes(input));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  activeButton: {
    backgroundColor: 'grey',
  },
});
