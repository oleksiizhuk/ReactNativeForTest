import { setDefaultTheme } from '../../../store/reducers/theme';
import { useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

export const useStartupScreen = () => {
  const navigation = useNavigation<any>();

  const init = useCallback(async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );

    await setDefaultTheme({ theme: 'default', darkMode: undefined });
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  }, [navigation]);

  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);

  return {};
};
