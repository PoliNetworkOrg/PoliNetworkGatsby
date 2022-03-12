import * as React from 'react'
import { useTheme } from '@skagami/gatsby-plugin-dark-mode'

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme()

  if (theme === null) return null

  return (
    <label>
      <input
        type="checkbox"
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        checked={theme === 'dark'}
      />
      Dark mode
    </label>
  )
}
