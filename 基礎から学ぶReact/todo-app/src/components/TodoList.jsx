import { TodoItem } from "./TodoItem"

export const TodoList = ({todoList, toggleTodoListItemStatus, deleteTodoListItem}) => {
  return (
    <ul>
      {
        todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />
        ))
      }
    </ul>
  )
}
