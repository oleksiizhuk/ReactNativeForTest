import React, { memo, useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../components/Atoms/Button/Button';
import { Title } from '../../../components/Atoms/Title/Title';

export const AnimationTopicScreen = memo(() => {
  const navigation = useNavigation<any>();

  const navigateToAnimatedAPI = useCallback(() => {
    return navigation.navigate('AnimatedAPIScreen');
  }, [navigation]);

  const navigateToLayoutAnimation = useCallback(() => {
    return navigation.navigate('LayoutAnimationScreen');
  }, [navigation]);

  const navigateToReanimated = useCallback(() => {
    return navigation.navigate('ReanimatedScreen');
  }, [navigation]);

  const navigateToCarouselScreen = useCallback(() => {
    return navigation.navigate('CarouselScreen');
  }, [navigation]);

  const navigateToCarouselFlatListScreen = useCallback(() => {
    return navigation.navigate('CarouselFlatListScreen');
  }, [navigation]);

  const navigateToCarouselReanimatedScreen = useCallback(() => {
    return navigation.navigate('CarouselReanimatedScreen');
  }, [navigation]);

  const navigateToCarouselWithLibrary = useCallback(() => {
    return navigation.navigate('CarouselWithLibrary');
  }, [navigation]);

  const navigateToReactAnimationVsReanimated = useCallback(() => {
    return navigation.navigate('ReactAnimationVsReanimated');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Title title={'Animation'} />
      <Button
        text={'Animated API'}
        onPress={navigateToAnimatedAPI}
        styleContainer={styles.buttonContainer}
      />
      <Button
        text={'Layout Animation'}
        onPress={navigateToLayoutAnimation}
        styleContainer={styles.buttonContainer}
      />
      <Button
        text={'ReanimatedScreen'}
        onPress={navigateToReanimated}
        styleContainer={styles.buttonContainer}
      />
      <Button
        text={'CarouselScreen'}
        onPress={navigateToCarouselScreen}
        styleContainer={styles.buttonContainer}
      />
      <Button
        text={'CarouselFlatListScreen'}
        onPress={navigateToCarouselFlatListScreen}
        styleContainer={styles.buttonContainer}
      />
      <Button
        text={'CarouselReanimatedScree'}
        onPress={navigateToCarouselReanimatedScreen}
        styleContainer={styles.buttonContainer}
      />
      <Button
        text={'CarouselWithLibrary'}
        onPress={navigateToCarouselWithLibrary}
        styleContainer={styles.buttonContainer}
      />
      <Button
        text={'ReactAnimationVsReanimated'}
        onPress={navigateToReactAnimationVsReanimated}
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
