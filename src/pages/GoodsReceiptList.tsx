import React, { useMemo, useState } from 'react';

interface Receipt {
  code: string;
  date: string; // ISO
  location: string;
  source: string;
  createdBy: string;
  status: 'Draft' | 'Submitted' | 'Pending Approval' | 'Posted' | 'Cancelled';
}

const sampleData: Receipt[] = [
  {
    code: 'GR001',
    date: '2025-08-20',
    location: 'Warehouse A',
    source: 'Supplier X',
    createdBy: 'Alice',
    status: 'Draft',
  },
  {
    code: 'GR002',
    date: '2025-08-21',
    location: 'Warehouse B',
    source: 'Supplier Y',
    createdBy: 'Bob',
    status: 'Posted',
  },
];

export default function GoodsReceiptList() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  const data = useMemo(() => {
    return sampleData.filter((r) => {
      const matchSearch =
        r.code.toLowerCase().includes(search.toLowerCase()) ||
        r.source.toLowerCase().includes(search.toLowerCase());
      const matchStatus = status ? r.status === status : true;
      return matchSearch && matchStatus;
    });
  }, [search, status]);

  return (
    <div>
      <h1>Goods Receipts</h1>
      <div className="filters">
        <input
          placeholder="Search code or source"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All Status</option>
          <option>Draft</option>
          <option>Submitted</option>
          <option>Pending Approval</option>
          <option>Posted</option>
          <option>Cancelled</option>
        </select>
        <button>Create Receipt</button>
        <button>Export Excel</button>
      </div>
      {data.length === 0 ? (
        <div className="empty">No receipts. <button>Create Receipt</button></div>
      ) : (
        <table className="receipts">
          <thead>
            <tr>
              <th>Receipt Code</th>
              <th>Date</th>
              <th>Receiving Location</th>
              <th>Source/Supplier</th>
              <th>Created By</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((r) => (
              <tr key={r.code}>
                <td>{r.code}</td>
                <td>{r.date}</td>
                <td>{r.location}</td>
                <td>{r.source}</td>
                <td>{r.createdBy}</td>
                <td>{r.status}</td>
                <td>
                  <button>View</button>
                  {(r.status === 'Draft' || r.status === 'Submitted') && (
                    <button>Edit</button>
                  )}
                  {r.status === 'Draft' && <button>Delete</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

