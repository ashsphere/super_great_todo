import { useState } from 'react';

interface Props {
  onAdd: (title: string, dueDate: string) => void;
}

export const AddTodoForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !dueDate) return;
    onAdd(title, dueDate);
    setTitle('');
    setDueDate('');
  };

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      <input
        type="text"
        placeholder="Todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};
