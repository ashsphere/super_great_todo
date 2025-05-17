import { fetchTodos } from '../repositories/todoRepository';

export const getTodos = async (userId: string) => {
  return fetchTodos(userId);
};
