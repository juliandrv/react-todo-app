import { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter(5);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Counter: <Small counter={counter} />
      </h1>
      <hr />

      <button onClick={increment} className="btn btn-secondary px-3">
        +1
      </button>

      <button
        onClick={() => setShow(!show)}
        className="btn btn-danger ms-3 px-3"
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
