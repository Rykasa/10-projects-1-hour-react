import { useEffect, useState } from "react"

export function ToastNotification() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() =>{
    const timeout = setTimeout(() =>{
      setIsVisible(false);
    }, 3000);

    return () =>{
      clearTimeout(timeout);
    }
  }, [])

  return (
    <>
      {isVisible ? (
        <div className="toast">
          <span>This challenge is crazy!</span>
        </div>
      ) : null}
    </>
  )
}

