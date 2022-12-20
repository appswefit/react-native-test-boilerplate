import { useContext, useState, ReactNode } from "react";
import { Repository, RepositoryContext, RepositoryContextData } from "../context/repository";

type RepositoryProviderProps = { children: ReactNode };

export const RepositoryProvider = ({ children }: RepositoryProviderProps) => {
  const [favorites, setFavorites] = useState<Repository[]>([]);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [repositoryOwner, setRepositoryOwner] = useState("appswefit");

  const addFavoriteRepository = async (repository: Repository) => {
    // TODO
  };

  const removeFavoriteRepository = async (repository: Repository) => {
    // TODO
  };

  const getUserRepositories = async (user: string) => {
    // TODO
  };

  return (
    <RepositoryContext.Provider
      value={{
        repositories,
        favorites,
        getUserRepositories,
        addFavoriteRepository,
        removeFavoriteRepository
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};

export const useRepository = (): RepositoryContextData => {
  const context = useContext(RepositoryContext);

  if (!context) {
    throw new Error('useRepository must be used within RepositoryProvider');
  }

  return context;
}
