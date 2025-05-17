import { useState } from 'react';

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const days = [];
  for (let i = 1; i <= endOfMonth.getDate(); i++) {
    days.push(i);
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={prevMonth}>{'<'}</button>
        <h3>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
        <button onClick={nextMonth}>{'>'}</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d} style={{ textAlign: 'center', fontWeight: 'bold' }}>{d}</div>
        ))}
        {Array(startOfMonth.getDay()).fill(null).map((_, i) => <div key={`empty-${i}`}></div>)}
        {days.map((day) => (
          <div key={day} style={{ textAlign: 'center', padding: '4px' }}>{day}</div>
        ))}
      </div>
    </div>
  );
};
