import { useState } from 'preact/hooks'
import { useFont, FONTS_TYPES } from '../hooks/useFont'

export const DropDown = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const { font, handleFont } = useFont()
  const handleClick = () => setToggleMenu(!toggleMenu)
  const handleChange = (e) => {
    const { innerText: fontValue } = e.target
    handleFont(fontValue)
    setToggleMenu(!toggleMenu)
  }
  return (
    <div className='relative inline-block text-left border-r-2'>
      <div>
        <button onClick={handleClick} type='button' className='inline-flex w-full justify-center items-center gap-4 rounded-md bg-transparent px-8 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 font-bold text-base' id='menu-button' aria-expanded='true' aria-haspopup='true'>
          {font}
          {/* <!-- Heroicon name: mini/chevron-down --> */}
          <img src='/assets/images/icon-arrow-down.svg' alt='icon arrow down' />
        </button>
      </div>
      {/* -TODO: ADD THE TRANSITIONS */}
      {/*
  <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
      {
        toggleMenu &&
          <div class='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none' role='menu' aria-orientation='vertical' aria-labelledby='menu-button' tabindex='-1'>
            <div className='py-1' role='none'>
              {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
              <a onClick={handleChange} hRef='#' className='text-gray-700 block px-4 py-2 text-sm' role='menuitem' tabIndex='-1' id='menu-item-0'>{FONTS_TYPES.SANS}</a>
              <a onClick={handleChange} hRef='#' className='text-gray-700 block px-4 py-2 text-sm' role='menuitem' tabIndex='-1' id='menu-item-1'>{FONTS_TYPES.SERIF}</a>
              <a onClick={handleChange} hRef='#' className='text-gray-700 block px-4 py-2 text-sm' role='menuitem' tabIndex='-1' id='menu-item-2'>{FONTS_TYPES.MONO}</a>
            </div>
          </div>
      }
    </div>
  )
}
