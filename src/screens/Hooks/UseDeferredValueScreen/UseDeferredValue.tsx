import React, { memo, useState, useDeferredValue, useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { City } from '../../../constant/city';
import { Input } from '../../../components/atoms/Input/Input';

export const UseDeferredValueScreen = memo(() => {
  const [inputValue, setInputValue] = useState('');
  const deferredInputValue = useDeferredValue(inputValue);

  const filteredItems = useMemo(() => {
    return someHeavyFilterFunction(deferredInputValue);
  }, [deferredInputValue]);

  return (
    <ScrollView style={styles.container}>
      <Input value={inputValue} onChangeText={setInputValue} />
      {filteredItems.map((item, index) => (
        <View>
          <Text key={index}>
            {item} {deferredInputValue}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});

const someHeavyFilterFunction = (name: string) => {
  return City.filter(item => item.includes(name));
};
