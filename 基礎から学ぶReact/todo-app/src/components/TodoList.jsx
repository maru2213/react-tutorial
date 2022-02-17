import { List } from "@chakra-ui/react"
import { TodoItem } from "./TodoItem"
import { TodoTitle } from "./TodoTitle"

export const TodoList = ({title, as, fontSize, todoList, toggleTodoListItemStatus, deleteTodoListItem}) => {
  return (
    <>
      {todoList.length !== 0 && (
        <>
          <TodoTitle title={title} as={as} fontSize={fontSize} mt="12" />
          <List w="full">
            {todoList.map((todo) => (
              <TodoItem key={todo.id} todo={todo} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />
            ))}
          </List>
        </>
      )}
    </>
  )
}
