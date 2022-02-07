import { FC } from "react";

type Props = {
  memos: string[],
  onClickDeleteButton: (index: number) => void
}

export const MemoList: FC<Props> = props => {
  const {memos, onClickDeleteButton} = props

  return (
    <ul>
      {memos.map((memo, index) => (
        <li>
          <p>{memo}</p>
          <button onClick={() => onClickDeleteButton(index)}>削除</button>
        </li>
      ))}
    </ul>
  )
}
