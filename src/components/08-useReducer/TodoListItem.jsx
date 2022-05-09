export const TodoListItem = ({
  todo,
  idx,
  handleDelete,
  handleToggleComplete,
}) => {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span className={`todo-task ${todo.done && 'complete'}`}>
        {idx + 1}. {todo.desc}
      </span>

      <div>
        <button
          onClick={() => handleToggleComplete(todo.id)}
          className={`btn me-3 ${
            !todo.done ? 'btn-success' : 'btn-secondary'
          }`}
        >
          <i
            className={`fa-solid ${
              !todo.done ? 'fa-check' : 'fa-rotate-left'
            }`}
          ></i>
        </button>
        <button
          onClick={() => handleDelete(todo.id)}
          className="btn btn-danger"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};
