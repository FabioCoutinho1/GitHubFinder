import { MdLocationPin } from "react-icons/md";
import type { UserProps } from "../types/user";
import { Link } from "react-router";

import classes from "./User.module.css";

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className={classes.container__user}>
      <div className={classes.img_and_follow__user}>
        <img
          className={classes.image__user}
          src={avatar_url}
          alt="foto do usuario"
        />
        {location && (
          <p>
            <MdLocationPin />
            <span>{location}</span>
          </p>
        )}

        <div className={classes.style_bar__user}></div>
        <div className={classes.infos__user}>
          <div>
            <p>{login}</p>
          </div>
          <div className={classes.follw_grup__user}>
            <div className={classes.follow__user}>
              <p>Seguidores:</p>
              <p>{followers}</p>
            </div>
            <div className={classes.follow__user}>
              <p>Seguindo:</p>
              <p>{following}</p>
            </div>
          </div>
          <div>
            <Link className={classes.more_repo__user} to={`/repos/${login}`}>
              Ver melhores projetos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
