import { Link, useLoaderData } from "react-router";

import type { Repo } from "../types/user";
import CompRepo from "../components/CompRepo";
import { MdHome } from "react-icons/md";

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
      <Link to={`/`}> <MdHome/></Link>

      {repos.map((repo) => (
        <div>
          <CompRepo {...repo}/>
        </div>
      ))}
    </div>
  );
};

export default Repos;
