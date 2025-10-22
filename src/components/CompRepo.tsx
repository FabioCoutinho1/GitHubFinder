import { MdStar } from "react-icons/md";
import type { Repo } from "../types/user";

import classes from "./CompRepo.module.css";

const CompRepo = ({
  id,
  html_url,
  name,
  description,
  stargazers_count,
}: Repo) => {
  return (
    <li key={id} className={classes.item__comprepo}>
      <a href={html_url} target="_blank" rel="noopener noreferrer">
        <p className={classes.name__comprepo}>{name}</p>
      </a>
      
      {description && <p className={classes.description__comprepo}> <span>Descrição: </span>{description}</p>}
      <div className={classes.star__comprepo}>
        <MdStar className={classes.star__icon} />
        <p>{stargazers_count}</p>
      </div>
    </li>
  );
};

export default CompRepo;
