import React, { useState, useEffect } from 'react';

import SearchForm from '../components/SearchForm';
import GitHubRepo from '../components/GitHubRepo';

export default function Search() {
  const [ query, setQuery ] = useState('');
  const [ repos, setRepos ] = useState(null);

  useEffect(() => {
    if (query) {
      fetch(`https://api.github.com/search/repositories?q=${query}`)
        .then(res => res.json())
        .then(body => setRepos(body.items));
    }
  }, [ query ])

  return (
    <div>
      <SearchForm query={query} onSubmit={q => setQuery(q)}/>
      {repos && (
        <ul>
          {repos.map(repo => <li key={repo.id}><GitHubRepo repo={repo} /></li>)}
        </ul>
      )}
    </div>
  );
}
