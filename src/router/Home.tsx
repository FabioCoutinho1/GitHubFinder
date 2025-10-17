import type { UserProps } from "../types/user";
import Search from "../components/Search";

import { useState } from "react";
import User from "../components/User";
import Erro from "../components/Erro";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    setUser(null);
    setError(false);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    if (res.status !== 200) {
      setError(true);
      return;
    }

    console.log(data);

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Erro />}
    </div>
  );
};

export default Home;
