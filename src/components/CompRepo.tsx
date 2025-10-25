import { MdStar } from "react-icons/md";
import type { Repo } from "../types/user";

import classes from "./CompRepo.module.css";

const techColors = {
  html: "#E34F26",
  css: "#1572B6",
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  react: "#61DAFB",
  node: "#339933",
  python: "#3776AB",
  java: "#E76F00",
  csharp: "#239120",
  php: "#777BB4",
  ruby: "#CC342D",
  go: "#00ADD8",
  rust: "#DEA584",
  swift: "#FA7343",
  kotlin: "#A97BFF",
  tailwind: "#06B6D4",
  bootstrap: "#7952B3",
  spring: "#6DB33F",
  vue: "#41B883",
  angular: "#DD0031",
} as const;

export type TechName = keyof typeof techColors;

const CompRepo = ({
  id,
  html_url,
  name,
  description,
  stargazers_count,
  language,
}: Repo) => {
  const lowerCase = language?.toLowerCase() as TechName;
  const color = techColors[lowerCase] || "#888";

  return (
    <li key={id} className={classes.item__comprepo}>
      <a href={html_url} target="_blank" rel="noopener noreferrer">
        <p className={classes.name__comprepo}>{name}</p>
      </a>

      {description && (
        <p className={classes.description__comprepo}>
          {" "}
          <span>Descrição: </span>
          {description}
        </p>
      )}

      <div className={classes.container__infos_repos}>
        <div>
          <p className={classes.grup__luguage}>
            <span
              className={classes.dot__language}
              style={{ backgroundColor: color }}
            ></span>{" "}
            {language ? language : "indefinida"}
          </p>
        </div>
        {stargazers_count !== 0 && (
          <div className={classes.star__comprepo}>
            <MdStar className={classes.star__icon} />
            <p>{stargazers_count}</p>
          </div>
        )}
      </div>
    </li>
  );
};

export default CompRepo;
