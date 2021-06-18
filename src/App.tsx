import GlobalStyles from './styles/global';
import {ThemeContextProvider} from './context/themeContext';

import {Header} from './components/Header'

function App() {

  return (
   <ThemeContextProvider>
      <GlobalStyles/>
      <Header/>
   </ThemeContextProvider>
  );
}

export default App;
