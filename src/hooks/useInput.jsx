import { useState } from 'preact/hooks'

export const useInput = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInput = (event) => {
    const value = event.target.value
    setInputValue(value)
  }

  const clearInput = () => {
    setInputValue('')
  }

  return { inputValue, handleInput, clearInput }
}
