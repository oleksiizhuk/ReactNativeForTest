import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useRegistration } from '@screens/Registration/hooks';
import { Button, Input } from '@components/Atoms';
import { mergeTestId } from '@utils/mergeTestId.ts';

const testID = 'registration-screen';
export const RegistrationScreen = () => {
  const { form, updateField, onRegister, isFormValid, isLoading } =
    useRegistration();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <Input
          label="First Name"
          placeholder="Enter first name"
          value={form.firstName}
          onChangeText={text => updateField('firstName', text)}
          testID={mergeTestId(testID, 'input-first-name')}
        />
        <Input
          label="Last Name"
          placeholder="Enter last name"
          value={form.lastName}
          onChangeText={text => updateField('lastName', text)}
          testID={mergeTestId(testID, 'input-last-name')}
        />
        <Input
          label="Age"
          placeholder="Enter age"
          value={form.age ? String(form.age) : ''}
          onChangeText={text => updateField('age', Number(text) || 0)}
          keyboardType="numeric"
          testID={mergeTestId(testID, 'input-age')}
        />
        <Input
          label="Email"
          placeholder="Enter email"
          value={form.email}
          onChangeText={text => updateField('email', text)}
          keyboardType="email-address"
          testID={mergeTestId(testID, 'input-email')}
        />
        <Input
          label="Password"
          placeholder="Enter password"
          value={form.password}
          onChangeText={text => updateField('password', text)}
          testID={mergeTestId(testID, 'input-password')}
        />
        <Input
          label="Confirm Password"
          placeholder="Confirm password"
          value={form.passwordConfirm}
          onChangeText={text => updateField('passwordConfirm', text)}
          error={
            form.passwordConfirm && form.password !== form.passwordConfirm
              ? 'Passwords do not match'
              : undefined
          }
          testID={mergeTestId(testID, 'input-passwordConfirm')}
        />
        <View style={styles.buttonContainer}>
          <Button
            text={isLoading ? 'Registering...' : 'Register'}
            onPress={onRegister}
            disabled={!isFormValid || isLoading}
            testID={mergeTestId(testID, 'button-register')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  form: {
    gap: 8,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
