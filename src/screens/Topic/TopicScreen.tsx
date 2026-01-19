import React, { memo, useCallback } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Button } from '../../components/Atoms/Button/Button'
import { useNavigation } from '@react-navigation/native'
import { Title } from '../../components/Atoms/Title/Title'

export const TopicScreen = memo(() => {
  const navigation = useNavigation<any>()

  const navigateToAnimation = useCallback(() => {
    return navigation.navigate('AnimationTopicScreen')
  }, [navigation])

  const navigateToHook = useCallback(() => {
    return navigation.navigate('HookTopicScreen')
  }, [navigation])

  const navigateToJS = useCallback(() => {
    return navigation.navigate('JSTopicScreen')
  }, [navigation])

  const navigateToTodo = useCallback(() => {
    return navigation.navigate('TodoScreen')
  }, [navigation])

  const navigateToBoard = useCallback(() => {
    return navigation.navigate('BoardScreen')
  }, [navigation])

  const navigateToClassLifeCycleScreen = useCallback(() => {
    return navigation.navigate('ClassLifeCycleScreen');
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
      <Button
        text={'Todo'}
        onPress={navigateToTodo}
        styleContainer={styles.buttonContainer}
      />
      <Button
        text={'board'}
        onPress={navigateToBoard}
        styleContainer={styles.buttonContainer}
      />
      <Button
        text={'ClassLifeCycleScreen'}
        onPress={navigateToClassLifeCycleScreen}
        styleContainer={styles.buttonContainer}
      />
    </ScrollView>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  buttonContainer: {
    marginBottom: 16,
  },
})
