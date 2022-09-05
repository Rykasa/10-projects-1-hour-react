import { MouseEvent, useRef, useState } from "react"

function App() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [transformOrigin, setTransformOrigin] = useState('');
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleMouseMove(e: MouseEvent){
    if(!imageRef.current) { return; }
    const x = e.clientX - imageRef.current.offsetLeft;
    const y = e.clientY - imageRef.current.offsetTop;

    setTransformOrigin(`${x}px ${y}px`);
    setIsMouseOver(true);
  }

  function handleMouseLeave(e: MouseEvent){
    setTransformOrigin('center center')
    setIsMouseOver(false);
  }

  return (
    <div className="app">
      <div 
        className="app__image" 
        ref={imageRef}
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave}
        >
        <img 
          src="https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
          alt="purple kitty" 
          style={{ transformOrigin: transformOrigin }}
          className={isMouseOver ? 'zoom' : ''}
        />
      </div>
    </div>
  )
}

export default App
