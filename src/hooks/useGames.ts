import useData from "./useData";

export interface Game {
  gameId: number;
  name: string;
  uri: string;
  platforms: Platform[];
  metacritic: number;
}

export interface Platform {
  platformId: number;
  name: string;
  slug: string;
}

const useGames = () => useData<Game>("Game/GetGamesWithCount");

export default useGames;
