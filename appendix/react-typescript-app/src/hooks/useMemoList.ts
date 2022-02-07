import { useState } from "react"

export const useMemoList = () => {
  const [memos, setMemos] = useState<string[]>([])

  const addTodo = (text: string) => {
    const newMemos = [...memos]
    newMemos.push(text)
    setMemos(newMemos)
  }

  const deleteTodo = (index: number) => {
    const newMemos = [...memos]
    newMemos.splice(index, 1)
    setMemos(newMemos)
  }

  return {memos, addTodo, deleteTodo}
}
