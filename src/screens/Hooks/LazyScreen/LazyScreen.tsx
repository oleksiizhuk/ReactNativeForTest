import React, { memo, useState, useCallback, lazy, Suspense } from 'react';
import { ScrollView, Text } from 'react-native';
import { CheckBox } from '@components/Atoms/CheckBox/CheckBox';
import { useStyles } from './LazyScreen.styles';
// import BigComponent from '../../../components/Atoms/BigComponent/BigComponent';
const BigComponent = lazy<React.ComponentType>(() =>
  delayForDemo(import('../../../components/Atoms/BigComponent/BigComponent')),
);

export const LazyScreen = memo(() => {
  const [isActive, setIsActive] = useState(false);
  const styles = useStyles();

  const toggleCheckBox = useCallback(() => {
    setIsActive(prevState => !prevState);
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

function delayForDemo(promise: any) {
  return new Promise<void>(resolve => {
    setTimeout(() => resolve(), 2000);
  }).then(() => promise);
}
