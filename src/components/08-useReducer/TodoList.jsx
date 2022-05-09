import { TodoListItem } from './TodoListItem';

export const TodoList = ({
  todos,
  handleDelete,
  handleToggleComplete,
}) => {
  return (
    <ul className="list-group list-group-flush mb-5">
      {todos.map((todo, idx) => (
        <TodoListItem
          todo={todo}
          idx={idx}
          key={todo.id}
          handleDelete={handleDelete}
          handleToggleComplete={handleToggleComplete}
        />
      ))}
    </ul>
  );
};
