import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

const init = () => {
  /* return [
    {
      id: new Date().getTime(),
      desc: 'Master React',
      done: false,
    },
  ]; */
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggleComplete = (todoId) => {
    dispatch({
      type: 'toggleComplete',
      payload: todoId,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    });
  };

  return (
    <>
      <h1>ToDoApp ({todos.length})</h1>
      <hr />

      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleToggleComplete={handleToggleComplete}
      />

      <TodoAdd handleAddTodo={handleAddTodo} />
    </>
  );
};
