import React, { memo } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
interface CheckBoxProps {
  isChecked: boolean
  toggleCheckBox: () => void
  label?: string
}

export const CheckBox = memo<CheckBoxProps>(
  ({ label, isChecked, toggleCheckBox }) => {
    return (
      <TouchableOpacity style={styles.container} onPress={toggleCheckBox}>
        <View style={[styles.checkbox, isChecked && styles.checkedCheckbox]} />
        {label && <Text style={styles.label}>{label}</Text>}
      </TouchableOpacity>
    )
  },
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkbox: {
    height: 20,
    width: 20,
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderWidth: 2,
    marginRight: 8,
  },
  checkedCheckbox: {
    backgroundColor: 'blue',
  },
  label: {
    fontSize: 16,
  },
})
