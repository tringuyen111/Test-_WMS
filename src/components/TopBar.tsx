import React, { useState, useEffect } from 'react';

export function TopBar() {
  const [lang, setLang] = useState<'VI' | 'EN'>('EN');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <header className="topbar">
      <input
        type="text"
        placeholder="Search EPC/Barcode"
        aria-label="search"
      />
      <div>
        <button onClick={() => setLang(lang === 'EN' ? 'VI' : 'EN')}>{lang}</button>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
        <span>User</span>
      </div>
    </header>
  );
}

export default TopBar;
