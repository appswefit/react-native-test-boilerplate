
import { createContext } from "react";


export type Repository = {
  id: number;
  name: string;
  owner: { name: string; avatar: string };
  description: string;
  url: string;
  language: string;
  stars: number;
  favorite: boolean;
};

export type RepositoryContextData = {
  repositories: Repository[];
  favorites: Repository[];
  getUserRepositories: (user: string) => Promise<void>;
  addFavoriteRepository: (repository: Repository) => void;
  removeFavoriteRepository: (repository: Repository) => void;
};

export const RepositoryContext = createContext<RepositoryContextData>(
  {} as RepositoryContextData,
);



