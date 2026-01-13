import React, { memo, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@components/Atoms/Button/Button.tsx';
import { Title } from '@components/Atoms/Title/Title.tsx';
import { useStyles } from './HookTopicScreen.styles';

export const HookTopicScreen = memo(() => {
  const navigation = useNavigation<any>();
  const styles = useStyles();

  const navigateToUseDeferredValueScreen = useCallback(() => {
    return navigation.navigate('UseDeferredValueScreen');
  }, [navigation]);

  const navigateToUseTransitionScreen = useCallback(() => {
    return navigation.navigate('UseTransitionScreen');
  }, [navigation]);

  const navigateToUseIDScreen = useCallback(() => {
    return navigation.navigate('UseIDScreen');
  }, [navigation]);

  const navigateToLazyScreen = useCallback(() => {
    return navigation.navigate('LazyScreen');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Title title={'React Hooks'} />
      <Button
        text={'UseDeferredValue'}
        onPress={navigateToUseDeferredValueScreen}
        styleContainer={styles.buttonContainer}
      />
      <Button
        text={'UseTransition'}
        onPress={navigateToUseTransitionScreen}
        styleContainer={styles.buttonContainer}
      />
      <Button
        text={'UseId'}
        onPress={navigateToUseIDScreen}
        styleContainer={styles.buttonContainer}
      />
      <Button
        text={'Lazy'}
        onPress={navigateToLazyScreen}
        styleContainer={styles.buttonContainer}
      />
    </ScrollView>
  );
});
