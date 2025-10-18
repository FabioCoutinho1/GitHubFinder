import type { Repo } from "../types/user"

import classes from "./CompRepo.module.css"

const CompRepo = ({id, html_url, name, description}: Repo) => {
  return (
     <li key={id} className={classes.item__comprepo}>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>

          {description && <p>{description}</p>}
        </li>
  )
}

export default CompRepo