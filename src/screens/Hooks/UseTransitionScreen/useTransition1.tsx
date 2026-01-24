import React, { memo, useCallback, useState, useTransition } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input } from '@components/Atoms';
import { City } from '@/constant/city.ts';
import { mergeTestId } from '@/utils';

const testID = 'useTransitionScreen';
// dont work
export const UseTransitionScreen = memo(() => {
  const [inputValue, setInputValue] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = useCallback((newInputValue: string) => {
    setInputValue(newInputValue);
    startTransition(() => {
      // Perform filtering inside the transition
      const newFilteredItems = City.filter(item =>
        item.includes(newInputValue),
      );
      setFilteredItems(newFilteredItems);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Input
        value={inputValue}
        onChangeText={handleChange}
        placeholder="Type here..."
        testID={mergeTestId(testID, 'input')}
      />
      {isPending && <Text>Loading...</Text>}
      {filteredItems.map((item, index) => (
        <View key={index}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});
