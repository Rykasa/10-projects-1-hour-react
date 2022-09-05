import { useState } from "react";
import { ToastNotification } from "./components/ToastNotification"

function App() {
  const [notifications, setNotifications] = useState<number[]>([]);

  function addNewToastNotification(){
    setNotifications((prev) =>{
      return [...prev, new Date().getTime()];
    })
  }

  return (
    <div className="app">
      <button type="button" onClick={addNewToastNotification}>Click me pretty please</button>

      <div className="app__toastContainer">
        {notifications.map((notification, index) =>{
          return(
            <ToastNotification key={index + notification} />
          )
        })}
      </div>
    </div>
  )
}

export default App
