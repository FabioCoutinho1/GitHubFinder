import { useLoaderData } from "react-router";

export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
}

interface ReposLoaderData {
  login: string;
  repos: Repo[];
}

export const reposLoaders = async ({
  params,
}: {
  params: { login?: string };
}) => {
  const { login } = params;

  const res = await fetch(`https://api.github.com/users/${login}/repos`);

  const data: Repo[] = await res.json();
  console.log(data);

  return { login, repos: data };
};

const Repos = () => {
  const { login, repos } = useLoaderData() as ReposLoaderData;

  return (
    <div>
      <h2>Repositorios de {login}</h2>

      {repos.map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>

          {repo.description && <p>{repo.description}</p>}
        </li>
      ))}
    </div>
  );
};

export default Repos;
