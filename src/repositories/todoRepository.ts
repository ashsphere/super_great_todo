import { supabase } from '../lib/supabaseClient';
import { Todo } from '../domain/Todo';

export async function fetchTodos(userId: string): Promise<Todo[]> {
  const { data, error } = await supabase
    .from('sgt_todos')
    .select('*')
    .eq('user_id', userId)
    .order('due_date', { ascending: true });
  if (error) throw error;
  return (data ?? []) as Todo[];
}

export async function addTodo(userId: string, title: string, dueDate: string): Promise<Todo> {
  const { data, error } = await supabase
    .from('sgt_todos')
    .insert({ title, due_date: dueDate, user_id: userId })
    .single();
  if (error) throw error;
  return data as Todo;
}
