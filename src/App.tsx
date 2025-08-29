import React, { useState } from 'react';
import GlobalLayout from './layout/GlobalLayout';
import GoodsReceiptList from './pages/GoodsReceiptList';
import GoodsReceiptCreate from './pages/GoodsReceiptCreate';

export default function App() {
  const [page, setPage] = useState<'list' | 'create'>('list');
  return (
    <GlobalLayout
      breadcrumbs={
        page === 'list'
          ? ['Transactions', 'Goods Receipts']
          : ['Transactions', 'Goods Receipts', 'Create']
      }
    >
      {page === 'list' ? (
        <GoodsReceiptList onCreate={() => setPage('create')} />
      ) : (
        <GoodsReceiptCreate onBack={() => setPage('list')} />
      )}
    </GlobalLayout>
  );
}
