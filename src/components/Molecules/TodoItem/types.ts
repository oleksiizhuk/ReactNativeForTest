export interface TodoItemProps {
  id: string;
  text: string;
  onDelete: (id: string) => void;
  onEdit: () => void;
  onComplete: () => void;
}
