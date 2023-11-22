import React, { memo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TodoItemProps } from './types';
import { styles } from './styles';

export const TodoItem = memo<TodoItemProps>(
  ({ id, text, onDelete, onEdit, onComplete }) => {
    const onDeleteItem = useCallback(() => {
      onDelete(id);
    }, [id, onDelete]);
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={onComplete}>
          <Text style={styles.checkbox}>✔️</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onEdit}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDeleteItem}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);
