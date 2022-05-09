import { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoHeavyProcess = useMemo(
    () => heavyProcess(counter),
    [counter]
  );

  return (
    <div>
      <h1>
        MemoHook: <small>{counter}</small>
      </h1>
      <hr />

      <p>{memoHeavyProcess}</p>

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
