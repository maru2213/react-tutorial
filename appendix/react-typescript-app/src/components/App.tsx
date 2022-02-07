import { ChangeEvent, useState } from "react"

export const App = () => {
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
      <ul>
        {memos.map((memo, index) => (
          <li>
            <p>{memo}</p>
            <button onClick={() => onClickDeleteButton(index)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  )
}
