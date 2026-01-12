import React, { memo } from 'react';
import { useStyles } from './FeaturedCard.styles.ts';
import { View, Text, TouchableOpacity } from 'react-native';
import { FeaturedCardProps } from './FeaturedCard.types';

export const FeaturedCard = memo<FeaturedCardProps>(
  ({ icon, title, subtitle, description, onPress, iconBgStyle, badgeText }) => {
    const styles = useStyles();
    return (
      <TouchableOpacity
        style={styles.featuredCard}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.featuredHeader}>
          <View style={[styles.featuredIconContainer, iconBgStyle]}>
            <Text style={styles.featuredIcon}>{icon}</Text>
          </View>
          <View style={styles.featuredTextContainer}>
            <Text style={styles.featuredTitle}>{title}</Text>
            <Text style={styles.featuredSubtitle}>{subtitle}</Text>
          </View>
        </View>
        <Text style={styles.featuredDescription}>{description}</Text>
        {badgeText && (
          <View style={styles.featuredBadge}>
            <Text style={styles.featuredBadgeText}>{badgeText}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  },
);
