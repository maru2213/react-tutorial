import { useEffect, useState } from "react"
import * as todoData from "../api/todos"

export const useTodo = () => {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    todoData.getAllTodosData().then((data) => {
      setTodoList([...data].reverse())
    })
  }, [])

  // const toggleTodoListItemStatus
  // const addTodoListItem
  // const deleteTodoListItem

  return {todoList}
}
