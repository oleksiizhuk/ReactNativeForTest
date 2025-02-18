import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTodoData } from '../../../store/selector/todo'
import { addItem, deleteTodoItemById } from '../../../store/reducers/todo'
import { TodoItemType } from '../../../components/Template/Todo/types'
import uuid from 'react-native-uuid'

export const useTodo = () => {
  const [value, setValue] = useState<string>('')
  const dispatch = useDispatch()
  const todoListData = useSelector(selectTodoData)

  const addTodoItem = useCallback(() => {
    const newItem: TodoItemType = { id: String(uuid.v4()), text: value }
    dispatch(addItem(newItem))
    setValue('')
  }, [dispatch, value])

  const onChange = useCallback((text: string) => {
    setValue(text)
  }, [])

  const onDelete = useCallback(
    (id: string) => {
      dispatch(deleteTodoItemById(id))
    },
    [dispatch],
  )

  return { todoListData, value, onChange, addTodoItem, onDelete }
}
