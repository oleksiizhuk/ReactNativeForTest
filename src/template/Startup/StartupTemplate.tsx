import React, { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Brand } from '../../components/atoms';
import { useTheme } from '../../hooks';

export const StartupTemplate = memo(() => {
  const { Layout, Gutters } = useTheme();

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
    </View>
  );
});
