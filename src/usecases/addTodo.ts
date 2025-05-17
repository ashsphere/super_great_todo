import { addTodo as repoAddTodo } from '../repositories/todoRepository';

export const addTodo = async (userId: string, title: string, dueDate: string) => {
  return repoAddTodo(userId, title, dueDate);
};
