import { View, Text } from 'react-native';
import { useRegistration } from '@screens/Registration/hooks';
import { Button } from '@components/Atoms';
import React from 'react';

export const RegistrationScreen = () => {
  const { onRegister } = useRegistration();
  return (
    <View>
      <Text>Registration Screen</Text>
      <Button text={'Apply'} onPress={onRegister} disabled={true} />
    </View>
  );
};
