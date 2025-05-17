import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';
import { getTodos } from '../usecases/getTodos';
import { addTodo } from '../usecases/addTodo';
import { Todo } from '../domain/Todo';
import { TodoList } from '../components/TodoList';
import { AddTodoForm } from '../components/AddTodoForm';
import { Calendar } from '../components/Calendar';

export default function Todos() {
  const router = useRouter();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.push('/login');
        return;
      }
      const user = data.session.user;
      const todos = await getTodos(user.id);
      setTodos(todos);
    };
    fetch();
  }, [router]);

  const handleAdd = async (title: string, dueDate: string) => {
    const { data } = await supabase.auth.getSession();
    const user = data.session?.user;
    if (!user) return;
    const todo = await addTodo(user.id, title, dueDate);
    setTodos((prev) => [...prev, todo]);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div>
      <h1>Todos</h1>
      <button onClick={logout}>Logout</button>
      <AddTodoForm onAdd={handleAdd} />
      <TodoList todos={todos} />
      <h2>Calendar</h2>
      <Calendar />
    </div>
  );
}
