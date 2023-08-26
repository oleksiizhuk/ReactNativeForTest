import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../hooks";
import { useDispatch } from "react-redux";
import { useLazyFetchOneQuery } from "../../../services/modules/users";
import { Alert } from "react-native";
import { changeTheme, ThemeState } from "../../../store/theme";
import i18next from "i18next";

export const useExampleData = () => {
  const { t } = useTranslation(['example', 'welcome']);
  const {
    darkMode: isDark,
  } = useTheme();
  const dispatch = useDispatch();

  const [fetchOne, { data, isSuccess, isLoading, isFetching }] =
    useLazyFetchOneQuery();

  useEffect(() => {
    if (isSuccess && data?.name) {
      // @ts-ignore
      Alert.alert(t('Example:helloUser', { name: data.name }));
    }
  }, [isSuccess, data]);

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  const onChangeLanguage = (lang: 'fr' | 'en') => {
    i18next.changeLanguage(lang);
  };
  return {
    onChangeTheme,
    onChangeLanguage,
    fetchOne,
    isFetching,
    isLoading
  }
}
