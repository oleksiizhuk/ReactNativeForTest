export interface TodoItemProps {
  id: number;
  text: string;
  onDelete: () => void;
  onEdit: () => void;
  onComplete: () => void;
}
