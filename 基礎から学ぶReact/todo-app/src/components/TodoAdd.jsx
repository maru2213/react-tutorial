import { Textarea, Button } from "@chakra-ui/react"

export const TodoAdd = ({placeholder, leftIcon, buttonText, inputEl, handleOnClickedAddTodo}) => {
  return (
    <>
      <Textarea placeholder={placeholder} bgColor="white" mt="8" borderColor="gray.400" ref={inputEl} />
      <Button onClick={handleOnClickedAddTodo} colorScheme="blue" leftIcon={leftIcon} mt="8">{buttonText}</Button>
    </>
  )
}
