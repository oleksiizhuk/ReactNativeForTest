import React from 'react';
import { View, Image } from 'react-native';
import { useTheme } from '@hooks/useTheme/useTheme';
import { BrandProps } from './Brand.types';

export const Brand = ({
  height = 200,
  width = 200,
  mode = 'contain',
}: BrandProps) => {
  const { Layout, Images } = useTheme();

  return (
    <View testID={'Brand-img-wrapper'} style={{ height, width }}>
      <Image
        testID={'Brand-img'}
        style={Layout.fullSize}
        source={Images.logo}
        resizeMode={mode}
      />
    </View>
  );
};
