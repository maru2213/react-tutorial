import { ChangeEvent, FC, useState } from "react"
import { MemoList } from "./MemoList"

export const App: FC = () => {
  const [text, setText] = useState<string>("")
  const [memos, setMemos] = useState<string[]>([])

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickAddButton = () => {
    const newMemos = [...memos]
    newMemos.push(text)
    setMemos(newMemos)
    setText("")
  }

  const onClickDeleteButton = (index: number) => {
    const newMemos = [...memos]
    newMemos.splice(index, 1)
    setMemos(newMemos)
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
