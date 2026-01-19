import React from 'react'
import { TodoTemplate } from './template'
import { useTodo } from './hooks/useTodo'

export const TodoScreen = () => {
  const todoData = useTodo()
  return <TodoTemplate {...todoData} />
}
