import { createContext, useContext } from "react"
import {ThemeProvider, DefaultTheme} from 'styled-components';
import {usePersistedStateTheme} from '../hooks/usePersistedStateTheme';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type ThemeContextData = {
  toggleTheme: () => void;
}

type ThemeProviderProps = {
  children: React.ReactNode;
}

const ThemeContext = createContext({} as ThemeContextData);



export function ThemeContextProvider({children} :ThemeProviderProps )  {

  const [theme, setTheme] = usePersistedStateTheme<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return(
    <ThemeContext.Provider value={{toggleTheme}} >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme(){

  const context = useContext(ThemeContext);

  return context;

}