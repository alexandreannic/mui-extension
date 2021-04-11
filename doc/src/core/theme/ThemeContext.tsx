import * as React from 'react'
import {createContext, useContext, useState} from 'react'
import {LocalStorageEntity} from '../localStorage'

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

const storage = new LocalStorageEntity<boolean>('dark-theme')

interface ThemeContextProps {
  isDarkTheme: boolean
  setIsDarkTheme: (b: boolean) => void
}

export const ThemeContextProvider = ({children}: any) => {

  const [isDarkTheme, setIsDarkTheme] = useState(storage.load() || false)
  return (
    <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): boolean => {
  const {isDarkTheme} = useContext<ThemeContextProps>(ThemeContext)
  return isDarkTheme
}

export const useToggleTheme = (): () => void => {
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext)
  return () => {
    storage.save(!isDarkTheme)
    setIsDarkTheme(!isDarkTheme)
  }
}
