import React, { memo, useCallback } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../components/atoms/Button/Button';

export const HookTopicScreen = memo(() => {
  const navigation = useNavigation<any>();

  const navigateToAnimatedAPI = useCallback(() => {
    return navigation.navigate('UseDeferredValueScreen');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>React Hooks</Text>
      </View>
      <Button
        text={'UseDeferredValueScreen'}
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
