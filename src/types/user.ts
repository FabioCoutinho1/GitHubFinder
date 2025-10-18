export type UserProps = {
    avatar_url: string;
    login: string;
    location: string;
    followers: number;
    following: number;
}

export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
}