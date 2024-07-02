import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Game {
  gameId: number;
  name: string;
  uri: string;
  platforms: Platorm[];
}

interface Platorm {
  platformId: number;
  name: string;
  slug: string;
}

interface FetchGamesResponse {
  count: number;
  gameList: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("Game/GetGamesWithCount/", {
        signal: controller.signal,
      })
      .then((response) => {
        setGames(response.data.gameList);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError("An error occurred. Try again later. " + error.message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, error };
};

export default useGames;
