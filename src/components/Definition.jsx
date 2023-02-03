import { useWord, DATA_STATE } from '../hooks/useWord'
import { useInput } from '../hooks/useInput'

export const Definition = ({ children }) => {
  const { data, loading, updateWord } = useWord()
  const { inputValue, handleInput, clearInput } = useInput()

  const handleKeyDown = (event) => {
    const isNotEmpty = !!inputValue
    if (event.key === 'Enter' && isNotEmpty) {
      updateWord(inputValue)
      clearInput()
    }
  }
  const handleClick = () => {
    const isNotEmpty = !!inputValue
    if (isNotEmpty) {
      updateWord(inputValue)
      clearInput()
    }
  }

  return (
    <main>
      {/* input */}
      <div class='flex justify-between w-full px-[24px] py-[20px] text-xl font-bold bg-[#F4F4F4] rounded-2xl mt-[51px] cursor-pointer' type='text' id='search'>
        <input onKeyDown={handleKeyDown} onInput={handleInput} value={inputValue} class='bg-transparent outline-none w-full' placeholder='Search your word' />
        <img onClick={handleClick} src='/assets/images/icon-search.svg' alt='a search icon to load the info' />
      </div>
      {/* word */}
      {loading === DATA_STATE.EMPTY && (
        <section class='w-fit my-[10rem] mx-auto '>
          <img class='my-5 mx-auto' src='./assets/images/logo.svg' alt='logo' />
          <h1 class='text-[24px] opacity-30 font-bold text-center text-[#A445ED]'>Welcome to the Dictionary project</h1>
        </section>
      )}
      {
        data?.success === false && (
          <section class='w-fit my-[10rem] mx-auto '>
            <img class='my-5 mx-auto' src='./assets/images/logo.svg' alt='logo' />
            <h1 class='text-[24px] opacity-30 font-bold text-center'>{data?.message} 😔</h1>
          </section>
        )
      }
      {
      // eslint-disable-next-line multiline-ternary, no-extra-boolean-cast
      !!data?.word && loading === DATA_STATE.COMPLETED && (
        <>
          <section class='flex justify-between mt-11'>
            <div>
              <h1 class='text-[64px] font-bold'>{data?.word}</h1>
              <h3 class='text-[24px] text-[#A445ED]'>
                /{data?.pronunciation.all}/
              </h3>
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
                {data?.results?.map((item, index) => (
                  <li key={index} class='py-[13px]'>{item.definition}</li>
                ))}
              </ol>
            </div>
          </section>
        </>
      )
      }
      {loading === DATA_STATE.LOADING && <>{children}</>}
    </main>
  )
}
