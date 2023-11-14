import React, { memo, useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button } from '../../components/atoms/Button/Button';
import { useNavigation } from '@react-navigation/native';
import { Title } from '../../components/atoms/Title/Title';

export const TopicScreen = memo(() => {
  const navigation = useNavigation<any>();

  const navigateToAnimation = useCallback(() => {
    return navigation.navigate('AnimationTopic');
  }, [navigation]);

  const navigateToHook = useCallback(() => {
    return navigation.navigate('HookTopicScreen');
  }, [navigation]);

  const navigateToJS = useCallback(() => {
    return navigation.navigate('JSTopicScreen');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Title title={'Topics'} />
      <Button
        text={'Animation Topic'}
        onPress={navigateToAnimation}
        styleContainer={styles.buttonContainer}
      />
      <Button
        text={'Hook Topic'}
        onPress={navigateToHook}
        styleContainer={styles.buttonContainer}
      />
      <Button
        text={'JS Topic'}
        onPress={navigateToJS}
        styleContainer={styles.buttonContainer}
      />
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  buttonContainer: {
    marginBottom: 16,
  },
});
