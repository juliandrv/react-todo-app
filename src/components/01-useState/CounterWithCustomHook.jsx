import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(5);

  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <hr />

      <button
        onClick={() => decrement()}
        className="btn btn-primary px-3"
      >
        -1
      </button>
      <button
        onClick={() => increment()}
        className="btn btn-primary px-3 mx-4"
      >
        +1
      </button>
      <button onClick={reset} className="btn btn-primary px-3">
        Reset
      </button>
    </>
  );
};
