import React from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import Breadcrumbs from '../components/Breadcrumbs';

export interface GlobalLayoutProps {
  children: React.ReactNode;
}

export function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <TopBar />
        <Breadcrumbs paths={["Home", "Detail"]} />
        <main className="content">{children}</main>
      </div>
    </div>
  );
}

export default GlobalLayout;
