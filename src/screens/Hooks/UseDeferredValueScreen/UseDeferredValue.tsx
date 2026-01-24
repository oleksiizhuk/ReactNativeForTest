import React, {
  memo,
  useState,
  useDeferredValue,
  useMemo,
  useCallback,
} from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { City } from '@/constant/city.ts';
import { Input } from '@components/Atoms';
import { CheckBox } from '@components/Atoms';
import { mergeTestId } from '@/utils';

const testID = 'useDeferredValueScreen';
// Debounce
export const UseDeferredValueScreen = memo(() => {
  const [isChecked, setIsChecked] = useState(true);
  const [isFilterCity, setIsFilterCity] = useState(true);

  const toggleCheckBox = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  const toggleIsFilterCityCheckBox = useCallback(() => {
    setIsFilterCity(!isFilterCity);
  }, [isFilterCity]);

  const [inputValue, setInputValue] = useState('');

  const deferredInputValue = useDeferredValue(inputValue);

  const finalValue = useMemo(() => {
    return isChecked ? deferredInputValue : inputValue;
  }, [deferredInputValue, inputValue, isChecked]);

  const filteredItems = useMemo(() => {
    return someHeavyFilterFunction(finalValue, isFilterCity);
  }, [finalValue, isFilterCity]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <CheckBox
          isChecked={isChecked}
          toggleCheckBox={toggleCheckBox}
          label={`useDeferredValue: ${isChecked}`}
        />
        <CheckBox
          isChecked={isFilterCity}
          toggleCheckBox={toggleIsFilterCityCheckBox}
          label={`Filter city: ${isFilterCity}`}
        />
        <Text>filteredItems length: ${filteredItems.length}</Text>
      </View>
      <Input
        value={inputValue}
        onChangeText={setInputValue}
        testID={mergeTestId(testID, 'input')}
        placeholder={'Type here...'}
      />
      {filteredItems.map((item, index) => (
        <View key={index}>
          <Text>
            {item} {finalValue}
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

const someHeavyFilterFunction = (name: string, withFilter: boolean) => {
  return withFilter ? City.filter(item => item.includes(name)) : City;
};
