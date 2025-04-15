import { createContext, useState } from 'react';
import './App.css';
import { Form } from './components/Form';
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme}>
      <ThemeContext.Provider value={theme}>
        <Form/>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
