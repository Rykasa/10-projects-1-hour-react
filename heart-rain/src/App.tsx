import { useState } from "react";
import { Heart } from "./components/Heart";
// ❤💕

export function App(){
  const [hearts, setHearts] = useState(Array.from(new Array(150)));

  return(
    <main>
      {hearts.map((heart, index) =>{
        const id = new Date().getTime() + index;
        return(
          <Heart key={id} />
        )
      })}
    </main>
  )
}