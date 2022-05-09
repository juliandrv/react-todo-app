import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {
  console.log('triggered again :/');
  return (
    <button
      onClick={() => increment(5)}
      className="btn btn-primary px-3"
    >
      Increment
    </button>
  );
});
