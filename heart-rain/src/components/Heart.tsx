import {  useState, memo } from "react"
import { useRandomXPosition } from "../hooks/useRandomXPosition";

function HeartComponent(){
  const [xPosition, setXPosition] = useState(useRandomXPosition());
  const animationDuration = Math.random() * 10 + 3 + 's';

  return(
    <main>
      <span className="heart" style={{left: xPosition, animationDuration}}>
        ❤
      </span>
    </main>
  )
}

export const Heart = memo(HeartComponent);