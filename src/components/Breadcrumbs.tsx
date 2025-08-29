import React from 'react';

export interface BreadcrumbProps {
  paths: string[];
}

export function Breadcrumbs({ paths }: BreadcrumbProps) {
  return (
    <nav className="breadcrumbs" aria-label="breadcrumb">
      {paths.join(' / ')}
    </nav>
  );
}

export default Breadcrumbs;
