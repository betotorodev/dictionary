import { useEffect, useState } from 'preact/hooks'

export const FONTS_TYPES = {
  SANS: 'sans',
  SERIF: 'serif',
  MONO: 'mono'
}

export const useFont = () => {
  const [font, setFont] = useState(() => {
    return window.localStorage.getItem('font') || FONTS_TYPES.SANS
  })

  const handleFont = (typeFont) => {
    setFont(typeFont)
    window.localStorage.setItem('font', typeFont)
  }

  useEffect(() => {
    const body = document.getElementById('body')
    if (font === FONTS_TYPES.SANS) {
      body.classList.add('sans')
      body.classList.remove('serif')
      body.classList.remove('mono')
    } else if (font === FONTS_TYPES.SERIF) {
      body.classList.add('serif')
      body.classList.remove('sans')
      body.classList.remove('mono')
    } else {
      body.classList.add('mono')
      body.classList.remove('serif')
      body.classList.remove('sans')
    }
  }, [font])

  return { font, handleFont }
}
