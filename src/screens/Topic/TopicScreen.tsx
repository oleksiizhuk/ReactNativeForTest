import React, { memo, useCallback } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Button } from '../../components/atoms/Button/Button';
import { useNavigation } from '@react-navigation/native';

export const TopicScreen = memo(() => {
  const navigation = useNavigation<any>();

  const navigateToAnimation = useCallback(() => {
    return navigation.navigate('AnimationTopic');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Topics</Text>
      </View>
      <Button text={'Animation Topic'} onPress={navigateToAnimation} />
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});
