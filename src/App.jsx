import MyChildren from './components/filho'
import { MyProvider } from './components/Contexto'
import { useState, createContext, useContext } from 'react'

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {}})
const LanguageContext = createContext({ language: 'pt-BR', toggleLanguage: () => {}})

function App() {

  const [theme, setTheme] = useState('light')
  const [lang, setLang] = useState('pt-BR')

  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light')
  }

  const handleChange = (event) => {
    setLang(event.target.value)
  }

  return (
    <>
      <MyProvider>
        <MyChildren/>
      </MyProvider>
      
      <ThemeContext.Provider value= {{theme, toggleTheme}}>
        <LanguageContext.Provider value={{ lang, setLang }}>
          <div>
            <Toolbar />
            <button onClick={toggleTheme}>Trocar o tema</button>
            <select value={lang} onChange={handleChange}>
              <option value="pt-BR">pt-BR</option>
              <option value="en">en</option>
              <option value="es">es</option>
              <option value="pt-PT">pt-PT</option>
            </select>
          </div>
        </LanguageContext.Provider> 
      </ThemeContext.Provider>

    </>
  )
}

function Toolbar() {
  const {theme} = useContext(ThemeContext)
  const {lang} = useContext(LanguageContext)

  return (
    <div>
      <div style={{background: theme === 'dark' ? 'grey' : 'white', color: theme === 'dark' ? 'white' : 'black'}}>
      Tema utilizado - {theme}
      </div>
      <div>
      Lingua Escolhida - {lang}
      </div>
    </div>
    
  )
}

export default App
