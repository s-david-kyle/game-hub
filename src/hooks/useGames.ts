import { GameQuery } from "../App";
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

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "Game/GetGamesWithCount",
    {
      params: {
        genres: gameQuery.genre?.genreId,
        platforms: gameQuery.platform?.platformId,
        ordering: gameQuery.sortOrder?.value,
        search: gameQuery.search,
      },
    },
    [gameQuery]
  );

export default useGames;
