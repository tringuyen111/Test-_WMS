import React from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import Breadcrumbs from '../components/Breadcrumbs';

export interface GlobalLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: string[];
}

export function GlobalLayout({ children, breadcrumbs = [] }: GlobalLayoutProps) {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <TopBar />
        {breadcrumbs.length > 0 && <Breadcrumbs paths={breadcrumbs} />}
        <main className="content">{children}</main>
      </div>
    </div>
  );
}

export default GlobalLayout;
