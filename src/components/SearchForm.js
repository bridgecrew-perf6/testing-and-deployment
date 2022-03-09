import React, { useState } from 'react';

export default function SearchForm({ query, onSubmit }) {
  const [ inputQuery, setInputQuery ] = useState(query || "");

  return (
    <form onSubmit={e => {
      e.preventDefault();
      onSubmit(inputQuery);
    }}>
      <input type="text" value={inputQuery} onChange={e => setInputQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}
