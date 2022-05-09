import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './main.css';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, loading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  const { name, status, species, gender, image } = !!data && data;

  return (
    <>
      <h1 className="text-center">Rick and Morty Info</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <div className="card w-75 mb-3">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <hr />
            <p className="card-text">Status: {status}</p>
            <p className="card-text">Species: {species}</p>
            <p className="card-text">Gender: {gender}</p>
          </div>
        </div>
      )}

      <div className="d-grid mx-auto">
        <button
          onClick={increment}
          className="btn btn-primary m-auto"
        >
          Next Character
        </button>
      </div>
    </>
  );
};
