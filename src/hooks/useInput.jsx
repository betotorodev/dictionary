import { useState } from 'preact/hooks'

export const useInput = () => {
  const [inputValue, setInputValue] = useState('')
  const [isEmpty, setIsEmpty] = useState(false)

  const handleInput = (event) => {
    const value = event.target.value
    setInputValue(value.toLocaleLowerCase())
  }

  const clearInput = () => {
    setInputValue('')
  }

  const checkInput = (input) => {
    setIsEmpty(input)
  }

  return { inputValue, handleInput, clearInput, checkInput, isEmpty }
}
