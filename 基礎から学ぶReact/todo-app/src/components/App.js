import { Container } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodo } from '../hooks/useTodo'
import { useRef } from 'react'
import { TodoTitle } from './TodoTitle'

export const App = () => {
  const {todoList, toggleTodoListItemStatus, addTodoListItem, deleteTodoListItem} = useTodo()

  const inputEl = useRef(null)
  const handleOnClickedAddTodo = () => {
    const content = inputEl.current.value
    if (content === "") return
    addTodoListItem(content)
    inputEl.current.value = ""
  }

  const inCompletedList = todoList.filter((todo) => !todo.done)
  const completedList = todoList.filter((todo) => todo.done)

  console.log(todoList)

  return (
    <Container centerContent p={{ base: "4", md: "6" }} maxWidth="3xl">
      <TodoTitle title="TODO進捗管理" as="h1" fontSize={{ base: "2xl", md: "3xl" }} />
      <TodoAdd placeholder="ADD TODO" leftIcon={<AddIcon />} buttonText="TODOを追加" inputEl={inputEl} handleOnClickedAddTodo={handleOnClickedAddTodo} />

      <TodoList title="未完了TODOリスト" as="h2" fontSize={{ base: "xl", md: "2xl"}} todoList={inCompletedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />

      <TodoList title="完了TODOリスト" as="h2" fontSize={{ base: "xl", md: "2xl"}} todoList={completedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />
    </Container>
  );
}
