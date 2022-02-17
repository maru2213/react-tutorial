import { useEffect, useState } from 'react'
import axios from 'axios'
import { TodoList } from './TodoList'

const todoDataUrl = "http://localhost:3100/todos"

export const App = () => {
  const [todoList, setTodoList] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(todoDataUrl)
      setTodoList(response.data)
    }
    fetchData()
  }, [])

  const inCompletedList = todoList.filter((todo) => !todo.done)
  const completedList = todoList.filter((todo) => todo.done)

  console.log(todoList)

  return (
    <>
      <h1>TODO進捗管理</h1>
      <textarea />
      <button>+ TODOを追加</button>

      <h2>未完了TODOリスト</h2>
      <TodoList todoList={inCompletedList} />

      <h2>完了TODOリスト</h2>
      <TodoList todoList={completedList} />
    </>
  );
}
