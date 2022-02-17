import { useState } from "react"

export const useFetchUsers = () => {
  const [userList, setUserList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const onClickFetchUser = () => {
    setUserList([{id: 1, name: "後藤 一郎", age: 23}])
  }

  return { userList, isLoading, isError, onClickFetchUser }
}
