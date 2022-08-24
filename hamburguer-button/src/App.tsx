import { useState } from 'react';
import { List } from 'phosphor-react';

export function App(){
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function handleToggleSidebar(){
    setIsSidebarVisible((prevState) =>{
      return !prevState;
    });
  }

  return(
    <div className="container">
      <button type="button" className={`button ${isSidebarVisible ? 'move' : ''}`} onClick={handleToggleSidebar}>
        <List />
      </button>
      <aside className={isSidebarVisible ? 'show' : ''}>
        <strong>Menu</strong>
        <ul>
          <li>
           <a href="https://google.com" target="_blank">Google</a> 
          </li>
          <li>
           <a href="https://youtube.com" target="_blank">Youtube</a> 
          </li>
          <li>
           <a href="https://twitter.com" target="_blank">Twitter</a> 
          </li>
        </ul>
      </aside>
    </div>
  )
}