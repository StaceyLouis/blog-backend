import './App.css';
import Journal from './features/journal/Journal';
import {ThemeProvider} from 'styled-components'
import {GlobalStyles} from './styles/GlobalStyles'
import {lightTheme, darkTheme} from './styles/theme'
import {useState} from 'react'
import Nav from './components/Nav';
function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
    <div className="App">
      <Nav />
      <button onClick={themeToggler}>Switch theme</button>
   <Journal />

    </div>
    </ThemeProvider>
  );
}

export default App;
