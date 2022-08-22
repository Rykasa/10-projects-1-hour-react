import { useEffect, useState } from 'react';

const carouselImages = [
  'https://images.pexels.com/photos/9983635/pexels-photo-9983635.jpeg',
  'https://images.pexels.com/photos/8908749/pexels-photo-8908749.jpeg',
  'https://images.pexels.com/photos/1781932/pexels-photo-1781932.jpeg',
  'https://images.pexels.com/photos/12708081/pexels-photo-12708081.jpeg'
];

export function App(){
  const [index, setIndex] = useState(0);

  function changeImageToTheNextOne(){
    if(index >= carouselImages.length - 1){
      setIndex(0);
    }else{
      setIndex((prevState) => prevState + 1);
    }
  }

  useEffect(() =>{
      changeImageToTheNextOne();
  }, []);

  useEffect(() =>{
    const interval = setInterval(() =>{
      changeImageToTheNextOne();
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return(
    <main>
      <div>
        <img src={carouselImages[index]} alt="" />
      </div>
    </main>
  )
}