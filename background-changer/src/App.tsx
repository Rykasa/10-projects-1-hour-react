import { useRef } from "react"

export function App() {
  const body = useRef<HTMLElement>(document.body);
  const hexColorValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  function handleChangeColor(){
    const hexColor = generateNewHexColor();
    
    body.current.style.backgroundColor = hexColor;
  }

  function generateNewHexColor(){
    let hexColor = '#';

    for(let i = 0; i < 6; i++){
      hexColor += hexColorValues[Math.floor((Math.random() * hexColorValues.length))];
    }

    return hexColor;
  }

  return (
    <div>
      <button onClick={handleChangeColor}>Change Me</button>
    </div>
  )
}
