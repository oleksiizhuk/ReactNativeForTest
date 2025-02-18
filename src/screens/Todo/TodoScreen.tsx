import React from 'react'
import { TodoTemplate } from '../../components/Template/Todo/TodoTemplate'
import { useTodo } from './hooks/useTodo'

export const TodoScreen = () => {
  const todoData = useTodo()
  return <TodoTemplate {...todoData} />
}
