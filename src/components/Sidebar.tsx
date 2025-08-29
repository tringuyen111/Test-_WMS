import React from 'react';

const items = [
  'Dashboard',
  'Master Data',
  'Transactions',
  'Lookup',
  'System',
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
