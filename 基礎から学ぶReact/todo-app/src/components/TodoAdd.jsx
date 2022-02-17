export const TodoAdd = ({inputEl, handleOnClickedAddTodo}) => {
  return (
    <>
      <textarea ref={inputEl} />
      <button onClick={handleOnClickedAddTodo}>+ TODOを追加</button>
    </>
  )
}
