'use client'

import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="theme-toggle"
      aria-label="Toggle dark mode"
    >
      <span className={isDark ? '' : 'hidden'}>☀️</span>
      <span className={isDark ? 'hidden' : ''}>🌙</span>
    </button>
  )
}
