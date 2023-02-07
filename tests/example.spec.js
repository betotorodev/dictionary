import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:3000/'

test('app shows a word definition', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const input = page.getByPlaceholder('coffee, love, etc.')

  await input.fill('hi')
  // await input.press('Enter')

  await expect(input).toBeVisible()
})
