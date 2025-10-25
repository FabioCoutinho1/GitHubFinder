import { Link, useLoaderData } from "react-router";

import type { Repo } from "../types/user";
import CompRepo from "../components/CompRepo";
import { MdHome } from "react-icons/md";
import { useMemo } from "react";

import classes from "./Repos.module.css";

interface ReposLoaderData {
  login: string;
  repos: Repo[];
}

const Repos = () => {
  const { login, repos } = useLoaderData() as ReposLoaderData;

  const sortedRepos = useMemo(() => {
    //memoriza o valor do sort pra evitar reenderização desnecessarias
    return [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
  }, [repos]);
  //so reenderiza se o useMemo notar uma mudaça no repos

  return (
    <div className={classes.container__repos}>
      <div className={classes.header__repos}>
        <h2>Repositorios de {login}</h2>

        <Link to={`/`}>
          {" "}
          <MdHome fontSize={24} />
        </Link>
      </div>

      {sortedRepos.map((repo) => (
        <div key={repo.id}>
          <CompRepo {...repo} />
        </div>
      ))}
    </div>
  );
};

export default Repos;
