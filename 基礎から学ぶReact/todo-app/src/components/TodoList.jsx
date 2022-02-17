import { TodoItem } from "./TodoItem"

export const TodoList = ({todoList}) => {
  return (
    <ul>
      {
        todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      }
    </ul>
  )
}
