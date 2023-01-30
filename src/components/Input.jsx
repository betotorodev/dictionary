import { useState } from 'preact/hooks'

const API_URL = 'https://wordsapiv1.p.rapidapi.com/words/'

export const Input = () => {
  const [word, setWord] = useState('')
  const [data, setData] = useState({})
  const handleChange = (event) => {
    const value = event.target.value
    setWord(value)
  }
  const handleKeyDown = (event) => {
    const isNotEmpty = !!word
    if (event.key === 'Enter' && isNotEmpty) {
      getWordDefinition()
      setWord('')
    }
  }
  const getWordDefinition = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f47ec3cdfcmshbbe3ab04c3e297fp135cdfjsn0c40e5353898',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    }

    fetch(`${API_URL}${word}`, options)
      .then(response => response.json())
      .then(response => {
        setData(response)
        console.log(response)
      })
      .catch(err => console.error(err))
  }
  return (
    <main>
      {/* input */}
      <div class='flex justify-between w-full px-[24px] py-[20px] text-xl font-bold bg-[#F4F4F4] rounded-2xl mt-[51px] cursor-pointer' type='text'>
        <input onKeyDown={handleKeyDown} onInput={handleChange} value={word} class='bg-transparent outline-none' placeholder='Search your word' />
        <img src='/assets/images/icon-search.svg' alt='a search icon to load the info' />
      </div>
      {/* word */}
      {
        !!data.word && (
          <>
            <section class='flex justify-between mt-11'>
              <div>
                <h1 class='text-[64px] font-bold'>{data.word}</h1>
                <h3 class='text-[24px] text-[#A445ED]'>/{data.pronunciation.all}/</h3>
              </div>
              {/* <img src='/assets/images/icon-play.svg' alt='and icon of play to play an audio' /> */}
            </section>
            {/* results */}
            <section class='mt-[40px]'>
              <div class='flex gap-4 items-center'>
                <h2 class='text-[24px] font-bold italic'>noun</h2>
                <div class='w-full h-[2px] bg-slate-200' />
              </div>
              <div class='mt-10'>
                <h3 class='text-[#757575] text-xl mb-6'>Meaning</h3>
                <ol class='pl-8'>
                  {
                    data.results?.map((item, index) => <li key={index} class='py-[13px]'>{item.definition}</li>)
                  }
                </ol>
              </div>
            </section>
          </>
        )
      }
    </main>
  )
}
