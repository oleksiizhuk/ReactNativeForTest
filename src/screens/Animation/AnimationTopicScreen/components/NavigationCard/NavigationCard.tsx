import React, { memo } from 'react';
import { useStyles } from './NavigationCard.styles.ts';
import { TouchableOpacity, View, Text } from 'react-native';

export const NavigationCard = memo<NavigationCardProps>(
  ({ icon, title, description, onPress, iconBgStyle, badge, badgeStyle }) => {
    const styles = useStyles();
    return (
      <TouchableOpacity
        style={styles.cardWrapper}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.card}>
          {badge && (
            <View style={[styles.cardBadge, badgeStyle]}>
              <Text style={styles.cardBadgeText}>{badge}</Text>
            </View>
          )}
          <View style={[styles.cardIconContainer, iconBgStyle]}>
            <Text style={styles.cardIcon}>{icon}</Text>
          </View>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </TouchableOpacity>
    );
  },
);
