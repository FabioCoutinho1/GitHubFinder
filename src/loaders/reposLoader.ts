import type { Repo } from "../types/user";

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
