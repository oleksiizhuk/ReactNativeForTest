import React, { memo, useCallback } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStyles } from './AnimationTopicScreen.styles';
import { FeaturedCard, NavigationCard } from './components';

export const AnimationTopicScreen = memo(() => {
  const navigation = useNavigation<any>();
  const styles = useStyles();

  const navigateToAnimatedAPI = useCallback(() => {
    navigation.navigate('AnimatedAPIScreen');
  }, [navigation]);

  const navigateToLayoutAnimation = useCallback(() => {
    navigation.navigate('LayoutAnimationScreen');
  }, [navigation]);

  const navigateToReanimated = useCallback(() => {
    navigation.navigate('ReanimatedScreen');
  }, [navigation]);

  const navigateToCarouselScreen = useCallback(() => {
    navigation.navigate('CarouselScreen');
  }, [navigation]);

  const navigateToCarouselFlatListScreen = useCallback(() => {
    navigation.navigate('CarouselFlatListScreen');
  }, [navigation]);

  const navigateToCarouselReanimatedScreen = useCallback(() => {
    navigation.navigate('CarouselReanimatedScreen');
  }, [navigation]);

  const navigateToCarouselWithLibrary = useCallback(() => {
    navigation.navigate('CarouselWithLibrary');
  }, [navigation]);

  const navigateToReactAnimationVsReanimated = useCallback(() => {
    navigation.navigate('ReactAnimationVsReanimated');
  }, [navigation]);

  const navigateToGestureHandlerExample = useCallback(() => {
    navigation.navigate('GestureHandlerExample');
  }, [navigation]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Animation Lab</Text>
        <Text style={styles.headerSubtitle}>
          Explore React Native animations from{' '}
          <Text style={styles.headerAccent}>basics to advanced</Text>. Learn
          through interactive examples.
        </Text>
      </View>

      {/* Featured Section */}
      <FeaturedCard
        icon="⚡"
        title="Animated vs Reanimated"
        subtitle="Performance Comparison"
        description="See the real difference between JS thread and UI thread animations. Stress test both and watch one lag while the other stays smooth."
        onPress={navigateToReactAnimationVsReanimated}
        iconBgStyle={styles.bgWarning}
        badgeText="Must See"
      />

      <FeaturedCard
        icon="👆"
        title="Gesture Handler"
        subtitle="Touch Interactions"
        description="Master pan, pinch, swipe, and tap gestures. Build drag-and-drop, zoom, and swipeable cards with native performance."
        onPress={navigateToGestureHandlerExample}
        iconBgStyle={styles.bgPink}
        badgeText="Interactive"
      />

      <View style={styles.divider} />

      {/* Animation Basics Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionIcon}>🎬</Text>
          <Text style={styles.sectionTitle}>Animation Basics</Text>
        </View>
        <Text style={styles.sectionDescription}>
          Core animation concepts and APIs
        </Text>

        <View style={styles.cardsRow}>
          <NavigationCard
            icon="📊"
            title="Animated API"
            description="Built-in RN animation system"
            onPress={navigateToAnimatedAPI}
            iconBgStyle={styles.bgPrimary}
          />
          <NavigationCard
            icon="🔄"
            title="Layout Animation"
            description="Automatic layout transitions"
            onPress={navigateToLayoutAnimation}
            iconBgStyle={styles.bgSecondary}
          />
          <NavigationCard
            icon="🚀"
            title="Reanimated"
            description="UI thread animations"
            onPress={navigateToReanimated}
            iconBgStyle={styles.bgAccent}
            badge="PRO"
            badgeStyle={styles.badgeSuccess}
          />
        </View>
      </View>

      {/* Carousel Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionIcon}>🎠</Text>
          <Text style={styles.sectionTitle}>Carousel Examples</Text>
        </View>
        <Text style={styles.sectionDescription}>
          Different approaches to building carousels
        </Text>

        <View style={styles.cardsRow}>
          <NavigationCard
            icon="📱"
            title="Basic Carousel"
            description="Simple scroll-based"
            onPress={navigateToCarouselScreen}
            iconBgStyle={styles.bgPrimary}
          />
          <NavigationCard
            icon="📋"
            title="FlatList"
            description="Optimized for lists"
            onPress={navigateToCarouselFlatListScreen}
            iconBgStyle={styles.bgSecondary}
          />
          <NavigationCard
            icon="✨"
            title="Reanimated"
            description="Smooth animations"
            onPress={navigateToCarouselReanimatedScreen}
            iconBgStyle={styles.bgAccent}
          />
          <NavigationCard
            icon="📦"
            title="RNRC Library"
            description="Production-ready"
            onPress={navigateToCarouselWithLibrary}
            iconBgStyle={styles.bgSuccess}
            badge="REC"
            badgeStyle={styles.badgeWarning}
          />
        </View>
      </View>
    </ScrollView>
  );
});
