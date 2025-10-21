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
        <div className={classes.grup_star_name__comprepo}>
          <p>{name}</p>

          <div className={classes.star__comprepo}>
            <MdStar />
            <p>{stargazers_count}</p>
          </div>
        </div>
        {description && <p>{description}</p>}
      </a>
    </li>
  );
};

export default CompRepo;
