import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodo } from '../hooks/useTodo'
import { useRef } from 'react'

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
    <>
      <h1>TODO進捗管理</h1>
      <TodoAdd inputEl={inputEl} handleOnClickedAddTodo={handleOnClickedAddTodo} />

      <h2>未完了TODOリスト</h2>
      <TodoList todoList={inCompletedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />

      <h2>完了TODOリスト</h2>
      <TodoList todoList={completedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />
    </>
  );
}
