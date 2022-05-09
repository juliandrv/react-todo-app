import { memo } from 'react';

export const Small = memo(({ counter }) => {
  console.log('me llamaron de nuevo :(');
  return <small>{counter}</small>;
});
