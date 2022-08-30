import sounds from './assets/index';
import { SoundButton } from './components/SoundButton';

export function App() {
  return (
    <main>
      <div className="sounds-board">
        {sounds.map((sound, index) => {
          const id = new Date().getTime();
          const lastSlashIndex = sound.lastIndexOf('/');
          const soundTitle = sound.substring(lastSlashIndex + 1, sound.indexOf('.'));
          return(
            <SoundButton 
              key={id + index} 
              sound={sound} 
              title={soundTitle} 
            />
          )
        })}
      </div>
    </main>
  )
}
