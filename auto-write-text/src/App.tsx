import { FormEvent, useEffect, useState } from "react"

export function App() {
  const [text, setText] = useState('');
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  function writeText(){
    setCurrentText(text.slice(0, index));
    setIndex((prevState) => prevState + 1);

    if(index > text.length){
      setIndex(0);
    }
  }

  function resetText(){
    setText('');
    setCurrentText('');
    setHasStarted(false);
  }

  function handleSubmit(event: FormEvent){
    event.preventDefault();

    setHasStarted(true);
  }

  useEffect(() =>{
    if(hasStarted){
      const interval = setInterval(() =>{
        writeText();
      }, 100);

      return () => clearInterval(interval);
    }
  }, [currentText, index, hasStarted]);

  return (
    <div className="app">
      {hasStarted ? (
        <>
          <span>{currentText}</span>
          <button type="button" onClick={resetText}>Restart</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <input 
              type="text" 
              id="text" 
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder=" "
            />
            <label htmlFor="text">Text</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  )
}