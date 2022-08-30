export function useRandomXPosition(){
  const randomX = Math.floor(Math.random() * 100) + 'vw';

  return randomX;
}