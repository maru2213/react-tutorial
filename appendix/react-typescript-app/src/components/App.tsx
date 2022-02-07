import { ChangeEvent, FC, useState } from "react"
import { useMemoList } from "../hooks/useMemoList"
import { MemoList } from "./MemoList"

export const App: FC = () => {
  const [text, setText] = useState<string>("")
  const {memos, addTodo, deleteTodo} = useMemoList()

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickAddButton = () => {
    addTodo(text)
    setText("")
  }

  const onClickDeleteButton = (index: number) => {
    deleteTodo(index)
  }

  return (
    <>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onClickAddButton}>追加</button>
      <MemoList memos={memos} onClickDeleteButton={onClickDeleteButton}/>
    </>
  )
}
