import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log('email changed');
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />

      <div className="input-group mb-2">
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Your name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group mb-2">
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Your email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group mb-2">
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="********"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button className="btn btn-secondary px-3" type="submit">
        Submit
      </button>
    </form>
  );
};
