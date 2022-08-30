import { ButtonHTMLAttributes } from "react";

interface SoundButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  sound: string;
  title: string;
}

export function SoundButton({ sound, title, ...rest }: SoundButtonProps) {
  function playSound(sound: string){
    const audio = new Audio(sound);
    audio.volume = 0.4;
    audio.play()
  }

  return (
    <button 
      type="button" 
      onClick={() => playSound(sound)}
      {...rest}
    >
      { title }
    </button>
  )
}