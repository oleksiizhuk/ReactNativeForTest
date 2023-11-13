import React from 'react';
import { ExampleTemplate } from '../../template';
import { useExampleData } from './hooks/useExampleData';

export const ExampleScreen = () => {
  const { onChangeTheme, onChangeLanguage, fetchOne, isFetching, isLoading } =
    useExampleData();

  return (
    <ExampleTemplate
      onChangeTheme={onChangeTheme}
      onChangeLanguage={onChangeLanguage}
      fetchOne={fetchOne}
      isFetching={isFetching}
      isLoading={isLoading}
    />
  );
};
