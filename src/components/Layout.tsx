import { ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
      <nav style={{ marginBottom: '16px' }}>
        <Link href="/todos" style={{ marginRight: '8px' }}>Todos</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </div>
  );
};
