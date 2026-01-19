import React from 'react'
import { TodoTemplate } from 'src/screens/Todo/template/TodoTemplate.tsx'
import { useTodo } from './hooks/useTodo'

export const TodoScreen = () => {
  const todoData = useTodo()
  return <TodoTemplate {...todoData} />
}
