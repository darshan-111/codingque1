import { use } from 'react';
import { getGithubRepo } from '../lib/getGithubRepo';

export default function HomePage() {
  const repo = use(getGithubRepo('vercel/next.js'));

  return (
    <main style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>{repo.full_name}</h1>
      <p>{repo.description}</p>
      <p>⭐ Stars: {repo.stargazers_count}</p>
      <p>🍴 Forks: {repo.forks_count}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </main>
  );
}