import { TodoState } from 'src/store/reducers/todo/types.ts'

export interface AppState {
  todo: TodoState
  board: any
}
