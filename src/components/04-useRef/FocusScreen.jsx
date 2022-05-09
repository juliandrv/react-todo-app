import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        className="form-control mb-3"
        type="text"
        placeholder="name"
      />

      <button onClick={handleClick} className="btn btn-secondary">
        Focus
      </button>
    </>
  );
};
