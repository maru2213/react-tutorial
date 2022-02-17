import type { VFC } from "react"
import type { User } from "../types/user"

export const ListItem: VFC<User> = props => {
  const { id, name, age, personalColor, hobbies } = props
  return (
    <p>
      {id}:{name}({age}) {hobbies?.join(" / ")}
    </p>
  )
}

ListItem.defaultProps = {
  personalColor: "gray"
}
