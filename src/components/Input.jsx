export const Input = () => {
  return (
    <main>
      {/* input */}
      <div class='flex justify-between w-full px-[24px] py-[20px] text-xl font-bold bg-[#F4F4F4] rounded-2xl mt-[51px] cursor-pointer' type='text'>
        <input class='bg-transparent outline-none' placeholder='Search your word' />
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
          <div class='w-full h-[2px] bg-slate-200'/>
        </div>
      </section>
    </main>
  )
}
