import React, { useEffect, useState } from 'react'
import { useTheme } from '@skagami/gatsby-plugin-dark-mode'

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <label>
      <input
        type="checkbox"
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        checked={theme === 'dark'}
        disabled={!ready}
      />
      Dark mode
    </label>
  )
}
