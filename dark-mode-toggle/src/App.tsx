import { useState } from "react";
import { Sun, Moon } from 'phosphor-react';

export function App(){
  const [isDarkModeSelected, setIsDarkModeSelected] = useState(false);

  return(
    <div className={`container ${isDarkModeSelected ? 'dark' : 'light'}`}>
      <button onClick={() => setIsDarkModeSelected((prevState) => !prevState)} className={`toggleButton ${isDarkModeSelected ? 'dark' : 'light'}`}>
        {isDarkModeSelected ? (
          <Moon fontSize={35} />
        ) : (
          <Sun fontSize={35} />
        )}
      </button>
      <div className="info">
        <strong>Dark Mode Toggle</strong>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit rem provident molestiae doloribus, corporis officia aut veritatis tempora molestias minus.</span>
      </div>
    </div>
  )
}