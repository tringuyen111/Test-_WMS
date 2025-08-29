import React from 'react';
import GlobalLayout from './layout/GlobalLayout';
import GoodsReceiptList from './pages/GoodsReceiptList';

export default function App() {
  return (
    <GlobalLayout breadcrumbs={["Transactions", "Goods Receipts"]}>
      <GoodsReceiptList />
    </GlobalLayout>
  );
}
