import React from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import i18next from 'i18next';
import { Brand } from '../../components/atoms';
import { useTheme } from '../../hooks';

export const ExampleTemplate = ({
  onChangeTheme,
  onChangeLanguage,
  fetchOne,
  isFetching,
  isLoading,
}: any) => {
  const navigation = useNavigation<any>();
  const { t } = useTranslation(['example', 'welcome']);
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
  } = useTheme();

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        Layout.colCenter,
        Layout.scrollSpaceBetween,
      ]}
    >
      <View
        style={[
          Layout.fill,
          Layout.relative,
          Layout.fullWidth,
          Layout.justifyContentCenter,
          Layout.alignItemsCenter,
        ]}
      >
        <View
          style={[
            Layout.absolute,
            {
              height: 250,
              width: 250,
              backgroundColor: isDark ? '#000000' : '#DFDFDF',
              borderRadius: 140,
            },
          ]}
        />
        <Image
          style={[
            Layout.absolute,
            {
              bottom: '-30%',
              left: 0,
            },
          ]}
          source={Images.sparkles.bottomLeft}
          resizeMode={'contain'}
        />
        <View
          style={[
            Layout.absolute,
            {
              height: 300,
              width: 300,
              transform: [{ translateY: 40 }],
            },
          ]}
        >
          <Brand height={300} width={300} />
        </View>
        <Image
          style={[
            Layout.absolute,
            Layout.fill,
            {
              top: 0,
              left: 0,
            },
          ]}
          source={Images.sparkles.topLeft}
          resizeMode={'contain'}
        />
        <Image
          style={[
            Layout.absolute,
            {
              top: '-5%',
              right: 0,
            },
          ]}
          source={Images.sparkles.top}
          resizeMode={'contain'}
        />
        <Image
          style={[
            Layout.absolute,
            {
              top: '15%',
              right: 20,
            },
          ]}
          source={Images.sparkles.topRight}
          resizeMode={'contain'}
        />
        <Image
          style={[
            Layout.absolute,
            {
              bottom: '-10%',
              right: 0,
            },
          ]}
          source={Images.sparkles.right}
          resizeMode={'contain'}
        />

        <Image
          style={[
            Layout.absolute,
            {
              top: '75%',
              right: 0,
            },
          ]}
          source={Images.sparkles.bottom}
          resizeMode={'contain'}
        />
        <Image
          style={[
            Layout.absolute,
            {
              top: '60%',
              right: 0,
            },
          ]}
          source={Images.sparkles.bottomRight}
          resizeMode={'contain'}
        />
      </View>
      <View
        style={[
          Layout.fill,
          Layout.justifyContentBetween,
          Layout.alignItemsStart,
          Layout.fullWidth,
          Gutters.regularHPadding,
        ]}
      >
        <View>
          <Text style={[Fonts.titleRegular]}>{t('welcome:title')}</Text>
          <Text
            style={[Fonts.textBold, Fonts.textRegular, Gutters.regularBMargin]}
          >
            {t('welcome:subtitle')}
          </Text>
          <Text style={[Fonts.textSmall, Fonts.textLight]}>
            {t('welcome:description')}
          </Text>
        </View>

        <View
          style={[
            Layout.row,
            Layout.justifyContentBetween,
            Layout.fullWidth,
            Gutters.smallTMargin,
          ]}
        >
          <TouchableOpacity
            style={[Common.button.circle, Gutters.regularBMargin]}
            onPress={() => fetchOne(`${Math.ceil(Math.random() * 10 + 1)}`)}
          >
            {isFetching || isLoading ? (
              <ActivityIndicator />
            ) : (
              <Image
                source={Images.icons.send}
                style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[Common.button.circle, Gutters.regularBMargin]}
            onPress={() => onChangeTheme({ darkMode: !isDark })}
          >
            <Image
              source={Images.icons.colors}
              style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[Common.button.circle, Gutters.regularBMargin]}
            onPress={() =>
              onChangeLanguage(i18next.language === 'fr' ? 'en' : 'fr')
            }
          >
            <Image
              source={Images.icons.translate}
              style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={[Common.button.circle, Gutters.regularBMargin]}
            onPress={() => navigation.navigate('Topic')}
          >
            <Image
              source={Images.icons.colors}
              style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
