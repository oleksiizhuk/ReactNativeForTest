import React, { memo, useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../components/Atoms/Button/Button';
import { Title } from '../../../components/Atoms/Title/Title';

export const JSTopicScreen = memo(() => {
  const navigation = useNavigation<any>();

  const navigateToAnimatedAPI = useCallback(() => {
    return navigation.navigate('JSAsynkScreen');
  }, [navigation]);

  const navigateToJSHTMLTreeScreen = useCallback(() => {
    return navigation.navigate('JSHTMLTreeScreen');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Title title={'JS'} />
      <Button
        text={'JS Asynk'}
        onPress={navigateToAnimatedAPI}
        styleContainer={styles.buttonContainer}
      />
      <Button
        text={'JS HTMLTree'}
        onPress={navigateToJSHTMLTreeScreen}
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
