import React, { memo, useState, useCallback, lazy, Suspense } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { CheckBox } from '../../../components/atoms/CheckBox/CheckBox';
// import BigComponent from '../../../components/atoms/BigComponent/BigComponent';
const BigComponent = lazy<React.ComponentType>(() =>
  delayForDemo(import('../../../components/atoms/BigComponent/BigComponent')),
);

export const LazyScreen = memo(() => {
  const [isActive, setIsActive] = useState(false);

  const toggleCheckBox = useCallback(() => {
    setIsActive(isActive => !isActive);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <CheckBox
        isChecked={isActive}
        toggleCheckBox={toggleCheckBox}
        label={`BigComponent is active: ${isActive}`}
      />
      {isActive && (
        <Suspense fallback={<Text> loading...</Text>}>
          <BigComponent />
        </Suspense>
      )}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});

function delayForDemo(promise: any) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
