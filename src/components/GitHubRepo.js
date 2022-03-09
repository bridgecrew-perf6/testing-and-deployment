import React from 'react';

export default function GitHubRepo({ repo }) {
  return (
    <div>
      <a href={repo.html_url}><h2>{repo.full_name}</h2></a>
      {repo.description && <p>{repo.description}</p>}
    </div>
  );
}
