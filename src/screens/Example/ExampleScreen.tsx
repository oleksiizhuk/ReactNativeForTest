import React from 'react';
import { ExampleTemplate } from '@components/Template';
import { useExampleData } from './hooks/useExampleData';

export const ExampleScreen = () => {
  const { onChangeTheme, onChangeLanguage } = useExampleData();

  return (
    <ExampleTemplate
      onChangeTheme={onChangeTheme}
      onChangeLanguage={onChangeLanguage}
      fetchOne={() => {}}
      isFetching={false}
      isLoading={false}
    />
  );
};
