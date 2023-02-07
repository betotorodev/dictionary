import { useWord, DATA_STATE } from '../hooks/useWord'
import { useInput } from '../hooks/useInput'

export const Definition = ({ children }) => {
  const { data, loading, updateWord } = useWord()
  const { inputValue, handleInput, clearInput, checkInput, isEmpty } = useInput()

  const handleKeyDown = (event) => {
    const validationInput = !!inputValue
    if (event.key === 'Enter' && validationInput) {
      updateWord(inputValue)
      clearInput()
      checkInput(false)
    } else if (event.key === 'Enter' && !validationInput) {
      checkInput(true)
    }
  }
  const handleClick = () => {
    const validationInput = !!inputValue
    if (validationInput) {
      updateWord(inputValue)
      clearInput()
      checkInput(false)
    } else if (!validationInput) {
      checkInput(true)
    }
  }

  return (
    <main>
      {/* input */}
      <div class='mt-[51px]'>
        <label htmlFor='search_input' class='text-sm md:text-xl hidden'>Search your word</label>
        <div class={`flex justify-between w-full px-[24px] py-[14px] md:py-[20px] text-base md:text-xl font-bold bg-[#F4F4F4] rounded-2xl cursor-pointer mt-2 ${isEmpty ? 'border-2 border-red-700' : ''}`} type='text' id='search'>
          <input id='search_input' onKeyDown={handleKeyDown} onInput={handleInput} value={inputValue} class='bg-transparent outline-none w-full' placeholder='coffee, love, etc.' />
          <img id='search_icon' onClick={handleClick} src='/assets/images/icon-search.svg' alt='a search icon to load the info' />
        </div>
      </div>
      {isEmpty && <small class='text-red-700 mt2 text-bold'>Upssss, It can't be empty</small>}
      {/* word */}
      {loading === DATA_STATE.EMPTY && (
        <section class='w-fit my-[10rem] mx-auto '>
          <img class='my-5 mx-auto' src='./assets/images/logo.svg' alt='logo' />
          <h1 class='text-[24px] font-bold text-center text-[var(--subTextLight)]'>Welcome to the Dictionary project</h1>
        </section>
      )}
      {
        data?.success === false && (
          <section class='w-fit my-[10rem] mx-auto '>
            <img class='my-5 mx-auto' src='./assets/images/logo.svg' alt='logo' />
            <h1 id='error_title' class='text-[24px] opacity-30 font-bold text-center'>{data?.message} 😔</h1>
          </section>
        )
      }
      {
      // eslint-disable-next-line multiline-ternary, no-extra-boolean-cast
      !!data?.word && loading === DATA_STATE.COMPLETED && (
        <>
          <section class='flex justify-between mt-11'>
            <div>
              <h1 id='word_title' class='text-[32px] md:text-[64px] font-bold'>{data?.word}</h1>
              <h3 class='text-[24px] text-[#A445ED]'>
                /{data?.pronunciation}/
              </h3>
            </div>
            {/* <img src='/assets/images/icon-play.svg' alt='and icon of play to play an audio' /> */}
          </section>
          {/* results */}
          {
            data.results.map((item, index) => (
              <section key={index} class='mt-[40px]'>
                <div class='flex gap-4 items-center'>
                  <h2 class='text-[24px] font-bold italic'>{item.type}</h2>
                  <div class='w-full h-[2px] bg-slate-200' />
                </div>
                <div class='mt-10'>
                  <h3 class='text-[#757575] text-xl mb-6'>Meaning</h3>
                  <ol class='pl-8'>
                    {item.definitions.map(({ definition }, index) => (
                      <li key={index} class='py-[13px]'>{definition}</li>
                    ))}
                  </ol>
                </div>
              </section>
            ))
          }
        </>
      )
      }
      {loading === DATA_STATE.LOADING && <>{children}</>}
    </main>
  )
}
