import { useState, useEffect } from 'preact/hooks'

const API_URL = 'https://wordsapiv1.p.rapidapi.com/words/'
export const DATA_STATE = {
  EMPTY: 'empty',
  LOADING: 'loading',
  COMPLETED: 'completed'
}
export const useWord = () => {
  const [data, setData] = useState({})
  const [word, setWord] = useState('')
  const [loading, setLoading] = useState(DATA_STATE.EMPTY)

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.PUBLIC_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
  }

  const updateWord = (newWord) => {
    setWord(newWord)
  }

  useEffect(() => {
    if (word !== '') {
      setLoading(DATA_STATE.LOADING)
      fetch(`${API_URL}${word}`, options)
        .then(response => response.json())
        .then(response => {
          setData(response)
          setLoading(DATA_STATE.COMPLETED)
        })
        .catch(err => console.error(err))
    }
  }, [word])

  return { data, loading, updateWord }
}
