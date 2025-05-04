export async function getGithubRepo(repo: string) {
  const res = await fetch(`https://api.github.com/repos/${repo}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
    },
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  return res.json();
}