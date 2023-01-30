import { useState } from 'preact/hooks'

export const Input = () => {
  const [word, setWord] = useState('')
  const handleChange = (event) => {
    const value = event.target.value
    setWord(value)
  }
  return (
    <main>
      {/* input */}
      <div class='flex justify-between w-full px-[24px] py-[20px] text-xl font-bold bg-[#F4F4F4] rounded-2xl mt-[51px] cursor-pointer' type='text'>
        <input onInput={handleChange} value={word} class='bg-transparent outline-none' placeholder='Search your word' />
        <img src='/assets/images/icon-search.svg' alt='a search icon to load the info' />
      </div>
      {/* word */}
      <section class='flex justify-between mt-11'>
        <div>
          <h1 class='text-[64px] font-bold'>Keyboard</h1>
          <h3 class='text-[24px] text-[#A445ED]'>/ˈkiːbɔːd/</h3>
        </div>
        <img src='/assets/images/icon-play.svg' alt='and icon of play to play an audio' />
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
            <li class='py-[13px]'>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
            <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
            <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
          </ol>
        </div>
        <div class='flex gap-4 mt-10'>
          <h3 class='text-[#757575] text-xl'>Synonyms</h3>
          <h3 class='text-[#A445ED] font-bold text-xl'>electric keyboard</h3>
        </div>
      </section>
    </main>
  )
}
