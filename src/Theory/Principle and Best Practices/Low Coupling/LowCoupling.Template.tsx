import { Button, Text, TextInput, View } from 'react-native'
import React from 'react'
import { LowCouplingStyles } from './LowCoupling.styles'

interface LowCouplingTemplateProps {
  users: any[]
  formValues: any
}

export const LowCouplingTemplate = ({
  users,
  formValues,
}: LowCouplingTemplateProps) => {
  const styles = LowCouplingStyles()
  const { values, handleChange, resetForm } = formValues

  return (
    <View style={styles.container}>
      {users && users.map((user) => <Text key={user?.id}>{user?.name}</Text>)}

      <TextInput
        placeholder="Name"
        value={values.name}
        onChangeText={(text) => handleChange('name', text)}
      />
      <TextInput
        placeholder="Email"
        value={values.email}
        onChangeText={(text) => handleChange('email', text)}
      />
      <Button title="Reset Form" onPress={resetForm} />
    </View>
  )
}
