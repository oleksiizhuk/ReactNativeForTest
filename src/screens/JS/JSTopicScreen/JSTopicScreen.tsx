import React, { memo, useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../components/atoms/Button/Button';
import { Title } from '../../../components/atoms/Title/Title';

export const JSTopicScreen = memo(() => {
  const navigation = useNavigation<any>();

  const navigateToAnimatedAPI = useCallback(() => {
    return navigation.navigate('JSAsynkScreen');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Title title={'JS'} />
      <Button
        text={'JS Asynk'}
        onPress={navigateToAnimatedAPI}
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
