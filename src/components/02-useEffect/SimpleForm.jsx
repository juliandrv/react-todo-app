import { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log('oe');
  }, []);

  /* useEffect(() => {
    // console.log('form has changed!');
  }, [formState]); */

  useEffect(() => {
    // console.log('email has changed!');
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  return (
    <>
      <h1>useEffect</h1>
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

      <div className="input-group">
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

      {name === '123' && <Message />}
    </>
  );
};
