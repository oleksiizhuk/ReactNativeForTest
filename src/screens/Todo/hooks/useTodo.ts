import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodoData } from '../../../store/selector/todo';
import { addItem } from '../../../store/reducers/todo';
import { TodoItemType } from '../../../components/Template/Todo/types';

export const useTodo = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();
  const todoListData = useSelector(selectTodoData);

  const addTodo = useCallback(
    (item: TodoItemType) => {
      dispatch(addItem(item));
    },
    [dispatch],
  );

  const onChange = useCallback((text: string) => {
    console.log('text = ', text);
    setValue(text);
  }, []);

  console.log('value value = ', value);
  return { todoListData, value, onChange };
};
