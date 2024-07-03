import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Genre {
  genreId: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  result: Genre[];
}

const useGenres = () => {
  const [genres, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("Genre/GetGenresWithCount", {
        signal: controller.signal,
      })
      .then((response) => {
        setGenre(response.data.result);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError("An error occurred. Try again later. " + error.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
