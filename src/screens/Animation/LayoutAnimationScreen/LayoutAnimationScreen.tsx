import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpandingView } from './Component/ExpandingView';
import { Title } from '../../../components/atoms/Title/Title';

export const LayoutAnimationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ExpandingView>
        <Title title={'ExpandingView'} />
      </ExpandingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});
