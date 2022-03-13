import * as React from 'react'
import { useTheme } from '@skagami/gatsby-plugin-dark-mode'

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme()

  return (
    <label>
      <input
        type="checkbox"
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        checked={theme === 'dark'}
        disabled={typeof window == 'undefined'}
      />
      Dark mode
    </label>
  )
}
