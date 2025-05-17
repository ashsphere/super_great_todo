import { Todo } from '../domain/Todo';

interface Props {
  todos: Todo[];
}

export const TodoList = ({ todos }: Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ margin: '4px 0' }}>
          {todo.title} - {new Date(todo.dueDate).toLocaleDateString()}
        </li>
      ))}
    </ul>
  );
};
