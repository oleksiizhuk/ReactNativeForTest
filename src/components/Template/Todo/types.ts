export type TodoItemType = {
  id: string;
  text: string;
};
export interface TodoTemplateProps {
  todoListData?: TodoItemType[];
  value: string;
  onChange: (text: string) => void;
  addTodoItem: () => void;
  onDelete: (id: string) => void;
}
