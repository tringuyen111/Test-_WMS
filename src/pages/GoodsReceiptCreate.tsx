import React, { useState } from 'react';

interface EpcItem {
  epc: string;
  note: string;
  isNew: boolean;
}

const existingEpcs = ['EPC0001', 'EPC0002'];

export default function GoodsReceiptCreate({
  onBack,
}: {
  onBack?: () => void;
}) {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [location, setLocation] = useState('');
  const [source, setSource] = useState('');
  const [notes, setNotes] = useState('');
  const [epcInput, setEpcInput] = useState('');
  const [epcs, setEpcs] = useState<EpcItem[]>([]);

  const addEpc = () => {
    const code = epcInput.trim();
    if (!code || epcs.some((e) => e.epc === code)) return;
    setEpcs((prev) => [
      ...prev,
      { epc: code, note: '', isNew: !existingEpcs.includes(code) },
    ]);
    setEpcInput('');
  };

  const removeEpc = (code: string) => {
    setEpcs((prev) => prev.filter((e) => e.epc !== code));
  };

  const canSubmit = location.trim() !== '' && epcs.length > 0;

  const handleSubmit = () => {
    if (!canSubmit) return;
    alert('Submitted');
    onBack?.();
  };

  const handleSave = () => {
    alert('Draft saved');
    onBack?.();
  };

  return (
    <div>
      <h1>Create Goods Receipt</h1>
      <div className="form">
        <div className="row">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="row">
          <label>Receiving Location*</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Select location"
          />
        </div>
        <div className="row">
          <label>Source/Supplier</label>
          <input value={source} onChange={(e) => setSource(e.target.value)} />
        </div>
        <div className="row">
          <label>Notes</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>
      </div>

      <h2>EPCs</h2>
      <div className="epc-input">
        <input
          placeholder="Scan or enter EPC"
          value={epcInput}
          onChange={(e) => setEpcInput(e.target.value)}
        />
        <button onClick={addEpc}>Add</button>
        <button disabled>Import</button>
      </div>
      {epcs.length === 0 ? (
        <div className="empty">No EPCs</div>
      ) : (
        <table className="epc-table">
          <thead>
            <tr>
              <th>EPC</th>
              <th>Asset Name</th>
              <th>Model</th>
              <th>Current Location</th>
              <th>Note</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {epcs.map((item) => (
              <tr key={item.epc}>
                <td>
                  {item.epc}
                  {item.isNew && <span className="tag-new">New</span>}
                </td>
                <td>{item.isNew ? '-' : 'Existing Asset'}</td>
                <td>{item.isNew ? '-' : 'Model A'}</td>
                <td>{item.isNew ? '-' : 'Warehouse A'}</td>
                <td>
                  <input
                    value={item.note}
                    onChange={(e) =>
                      setEpcs((prev) =>
                        prev.map((p) =>
                          p.epc === item.epc ? { ...p, note: e.target.value } : p
                        )
                      )
                    }
                  />
                </td>
                <td>
                  <button onClick={() => removeEpc(item.epc)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="actions">
        <button onClick={onBack}>Cancel</button>
        <button onClick={handleSave} disabled={epcs.length === 0}>
          Save Draft
        </button>
        <button onClick={handleSubmit} disabled={!canSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

