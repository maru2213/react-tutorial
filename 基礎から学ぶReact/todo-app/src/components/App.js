import { TodoList } from './TodoList'
import { useTodo } from '../hooks/useTodo'

export const App = () => {
  const {todoList} = useTodo()

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
