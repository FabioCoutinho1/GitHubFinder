import { Link, useLoaderData } from "react-router";

import type { Repo } from "../types/user";
import CompRepo from "../components/CompRepo";
import { MdHome } from "react-icons/md";

import classes from "./Repos.module.css";

interface ReposLoaderData {
  login: string;
  repos: Repo[];
}

const Repos = () => {
  const { login, repos } = useLoaderData() as ReposLoaderData;

  return (
    <div className={classes.container__repos}>
      <div className={classes.header__repos}>
        <h2>Repositorios de {login}</h2>

        <Link to={`/`}>
          {" "}
          <MdHome fontSize={24} />
        </Link>
      </div>

      {repos.map((repo) => (
        <ul key={repo.id}>
          <CompRepo {...repo} />
        </ul>
      ))}
    </div>
  );
};

export default Repos;
