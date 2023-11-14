import React, { memo, useCallback } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Button } from '../../components/atoms/Button/Button';
import { useNavigation } from '@react-navigation/native';

export const TopicScreen = memo(() => {
  const navigation = useNavigation<any>();

  const navigateToAnimation = useCallback(() => {
    return navigation.navigate('AnimationTopic');
  }, [navigation]);

  const navigateToHook = useCallback(() => {
    return navigation.navigate('HookTopicScreen');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Topics</Text>
      </View>
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