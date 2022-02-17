import { useEffect, useState } from "react"
import { ulid } from "ulid"
import * as todoData from "../api/todos"

export const useTodo = () => {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    todoData.getAllTodosData().then((data) => {
      setTodoList([...data].reverse())
    })
  }, [])

  const toggleTodoListItemStatus = (id) => {
    const todo = todoList.find((item) => item.id === id)
    const newTodo = {...todo, done: !todo.done}
    todoData.updateTodoData(id, newTodo).then(() => {
      const newList = todoList.map((item) => item.id === id ? newTodo : item)
      setTodoList(newList)
    })
  }

  const addTodoListItem = (todoContent) => {
    const todo = {
      id: ulid(),
      content: todoContent,
      done: false
    }
    todoData.addTodoData(todo).then(() => {
      setTodoList([todo, ...todoList])
    })
  }

  const deleteTodoListItem = (id) => {
    todoData.deleteTodoData(id).then(() => {
      setTodoList(todoList.filter((item) => item.id !== id))
    })
  }

  return {todoList, toggleTodoListItemStatus, addTodoListItem, deleteTodoListItem}
}
