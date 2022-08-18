import { FormEvent, useEffect, useState } from "react"

export function App() {
  const [text, setText] = useState('');
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

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
    setIsStarted(false);
  }

  function handleSubmit(event: FormEvent){
    event.preventDefault();

    setIsStarted(true);
  }

  useEffect(() =>{
    if(isStarted){
      const interval = setInterval(() =>{
        writeText();
      }, 100);

      return () => clearInterval(interval);
    }
  }, [currentText, index, isStarted]);

  return (
    <div className="app">
      {isStarted ? (
        <>
          <span>{currentText}</span>
          <button type="button" onClick={resetText}>Restart</button>
        </>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <input 
            className="form__input"
              type="text" 
              id="text" 
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder=" "
            />
            <label className="form__label" htmlFor="text">Text</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  )
}