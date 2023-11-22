export type TodoItemType = {
  id: number;
  text: string;
};
export interface TodoTemplateProps {
  todoListData?: TodoItemType[];
  value: string;
  onChange: (text: string) => void;
}
