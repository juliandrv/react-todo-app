import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './main.css';
import { useLayoutEffect, useRef, useState } from 'react';

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  const { name, status, species, gender, image } = !!data && data;

  const cardTitle = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(cardTitle.current.getBoundingClientRect());
  }, [name]);

  return (
    <>
      <h1 className="text-center">Layout Effect</h1>
      <hr />

      <div className="card w-75 mb-3">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 ref={cardTitle} className="card-title">
            {name}
          </h5>
          <hr />
          <p className="card-text">Status: {status}</p>
          <p className="card-text">Species: {species}</p>
          <p className="card-text">Gender: {gender}</p>
        </div>
      </div>

      <div className="d-grid mx-auto">
        <button
          onClick={increment}
          className="btn btn-primary m-auto"
        >
          Next Character
        </button>
      </div>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
    </>
  );
};
