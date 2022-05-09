import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length < 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Add New Task</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          className="form-control mb-3"
          type="text"
          name="description"
          placeholder="New task..."
          autoComplete="off"
          value={description}
        />

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary btn-block">
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};
