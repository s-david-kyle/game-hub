import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "Game/GetGamesWithCount",
    {
      params: {
        genres: selectedGenre?.genreId,
        platforms: selectedPlatform?.platformId,
      },
    },
    [selectedGenre?.genreId]
  );

export default useGames;
