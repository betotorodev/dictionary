import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/preact'
import { Definition } from '../src/components/Definition.jsx'
import UserEvent from '@testing-library/user-event'
import {h} from 'preact'

describe('Dictionary suite test', () => {
  const user = UserEvent.setup()
  const app = render(<Definition />)
  test('should render the app', () => {
    const input = app.getByPlaceholderText('Search your word :)')

    expect(input).toBeTruthy()
  })

  test('should render a definition when the user write in the input', async () => {
    const input = app.getByPlaceholderText('Search your word :)')
    const searchIcon = app.getByAltText('a search icon to load the info')

    await user.type(input, 'hi')
    await user.click(searchIcon)

    const result = await app.findByRole('heading', { name: /hi/i }, { timeout: 5000 })

    expect(result).toBeTruthy()
  })
})
